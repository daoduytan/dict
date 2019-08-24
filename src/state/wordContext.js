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

  const { uid } = user;

  const [numberWord, setNumberWord] = useState(() => {
    const number = localStorage.getItem('number');
    if (number === null) {
      return 10;
    }
    return number;
  });

  const [wordsToday, setWordsToday] = useState(() => {
    const wordLocal = localStorage.getItem('words');
    return JSON.parse(wordLocal) || [];
  });

  const reload = () => {
    ref.get().then(snapshot =>
      snapshot.docs.map(doc => {
        ref.doc(doc.id).delete();
        localStorage.removeItem('words');
        setWordsToday([]);
      })
    );
  };

  const updateStatusWord = w => {
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

            snapshot.forEach(doc => {
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
      .catch(err => {
        return [];
      });
  }, [uid]);

  const setLocalWord = words => {
    localStorage.setItem('words', JSON.stringify(words));
    setWordsToday(words);
    setLoading(false);
  };

  const reloadWord = useCallback(
    number => {
      setLoading(true);

      getWordsFromData().then(async wordsTodayData => {
        if (wordsTodayData.length === 0) {
          const words = generalWord(number);

          words.forEach(ele => {
            return ref
              .doc(uid)
              .collection('word_today')
              .add(ele)
              .then(res => {
                return { ...ele, id: res.id };
              });
          });

          setLocalWord(words);
        } else {
          setLocalWord(wordsTodayData);
        }
      });
    },
    [getWordsFromData, uid]
  );

  const handleChangeNumber = number => {
    localStorage.setItem('number', number);
    localStorage.removeItem('words');
    setNumberWord(number);
    reloadWord(number);
  };

  useEffect(() => {
    if (isAuth && wordsToday.length === 0) {
      reloadWord(numberWord);
    } else {
      setLoading(false);
    }
  }, [wordsToday.length, numberWord, reloadWord, isAuth]);

  if (loading) return <Loading />;

  return (
    <Provider
      value={{
        wordsToday,
        reload,
        updateStatusWord,
        numberWord,
        handleChangeNumber,
        updateTypeDate
      }}
    >
      {children}
    </Provider>
  );
};

export { ProviderWordContext, wordContext as default };
