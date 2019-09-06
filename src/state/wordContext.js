// @flow
import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
  type Node
} from 'react';

import { generalWord } from './ultil';
import { Loading } from '../components';
import { firestore } from '../api';
import authContext from './authContext';

const ref = firestore.collection('user');

const wordContext = createContext({
  wordsToday: [],
  reload: () => {},
  updateStatusWord: () => {},
  numberWord: 10,
  handleChangeNumber: () => {}
});
const { Provider } = wordContext;

type ProviderWordContextProps = { children: Node };

const ProviderWordContext = ({ children }: ProviderWordContextProps) => {
  const [loading, setLoading] = useState(true);
  const { user, isAuth } = useContext(authContext);

  const [words_done, setWordDone] = useState([]);

  const [numberWord, setNumberWord] = useState(() => {
    const number = localStorage.getItem('number');
    return number;
  });

  const [wordsToday, setWordsToday] = useState(() => {
    const wordLocal = localStorage.getItem('words');
    return JSON.parse(wordLocal) || [];
  });

  const reload = () => {
    if (user) {
      const { uid } = user;
      ref
        .doc(uid)
        .collection('word_today')
        .get()
        .then(snapshot =>
          snapshot.docs.map(doc => {
            ref
              .doc(uid)
              .collection('word_today')
              .doc(doc.id)
              .delete();
            localStorage.removeItem('words');
            return setWordsToday([]);
          })
        );
    }
  };

  const updateStatusWord = w => {
    if (user) {
      const { uid } = user;

      const newWord = wordsToday.map(word => {
        if (word.word === w) {
          ref
            .doc(uid)
            .collection('word_today')
            .where('word', '==', w)
            .get()
            .then(snapshot => {
              if (snapshot.empty) {
                return null;
              }

              return snapshot.forEach(doc => {
                ref
                  .doc(uid)
                  .collection('word_today')
                  .doc(doc.id)
                  .update({
                    status: !word.status
                  });
              });
            });

          return { ...word, day: Date.now(), status: !word.status };
        }
        return word;
      });

      localStorage.setItem('words', JSON.stringify(newWord));
      setWordsToday(newWord);
    }
  };

  const updateTypeDate = w => {
    const newWord = wordsToday.map(word => {
      if (word.word === w.word) {
        return w;
      }
      return word;
    });

    localStorage.setItem('words', JSON.stringify(newWord));
    setWordsToday(newWord);
  };

  const getWordsFromData = useCallback(() => {
    if (!user) return [];
    const { uid } = user;

    return ref
      .doc(uid)
      .collection('word_today')
      .get()
      .then(snapshot => {
        const wordsTodayData = snapshot.docs.map(doc => {
          return { id: doc.id, ...doc.data() };
        });
        return wordsTodayData;
      })
      .catch(() => {
        return [];
      });
  }, [user]);

  const setLocalWord = words => {
    localStorage.setItem('words', JSON.stringify(words));
    setWordsToday(words);
    setLoading(false);
  };

  const reloadWord = useCallback(async () => {
    setLoading(true);

    if (!user) return setLoading(false);

    const { uid } = user;

    return getWordsFromData().then(async wordsTodayData => {
      if (wordsTodayData.length === 0) {
        return firestore
          .collection('user')
          .doc(uid)
          .get()
          .then(async doc => {
            const number = doc.data() ? doc.data().number : 10;
            localStorage.setItem('number', number);
            setNumberWord(number);
            const words = await generalWord(number);

            words.forEach(ele => {
              return ref
                .doc(uid)
                .collection('word_today')
                .add(ele)
                .then(res => {
                  return { ...ele, id: res.id };
                });
            });

            return setLocalWord(words);
          });
      }
      return setLocalWord(wordsTodayData);
    });
  }, [getWordsFromData, user]);

  const handleChangeNumber = number => {
    localStorage.setItem('number', number);
    localStorage.removeItem('words');
    setNumberWord(number);
    reloadWord(number);
  };

  useEffect(() => {
    if (isAuth && wordsToday.length === 0) {
      reloadWord();
    } else {
      setLoading(false);
    }
  }, [wordsToday.length, numberWord, reloadWord, isAuth]);

  useEffect(() => {
    if (user) {
      const { uid } = user;
      firestore
        .collection('words_done')
        .where('uid', '==', uid)
        .onSnapshot(docSnapshot => {
          const wordsDone = [];

          docSnapshot.forEach(docs => wordsDone.push(docs.data()));
          setWordDone(wordsDone);
        });
    }
  }, [user]);

  if (loading) return <Loading />;

  return (
    <Provider
      value={{
        wordsToday,
        reload,
        updateStatusWord,
        numberWord,
        handleChangeNumber,
        updateTypeDate,
        words_done
      }}
    >
      {children}
    </Provider>
  );
};

export { ProviderWordContext, wordContext as default };
