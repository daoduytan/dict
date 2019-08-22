// @flow
import React, {
  createContext,
  useState,
  useEffect,
  useCallback,
  type Node
} from 'react';

import { generalWord } from './ultil';
import { Loading } from '../components';

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
    localStorage.removeItem('words');
    setWordsToday([]);
  };

  const updateStatusWord = w => {
    const newWord = wordsToday.map(word => {
      if (word.word === w.word) {
        return { ...word, status: !word.status };
      }
      return word;
    });
    localStorage.setItem('words', JSON.stringify(newWord));
    setWordsToday(newWord);
  };

  const reloadWord = useCallback(number => {
    setLoading(true);
    const words = generalWord(number);
    localStorage.setItem('words', JSON.stringify(words));
    setWordsToday(words);
    setLoading(false);
  }, []);

  const handleChangeNumber = number => {
    localStorage.setItem('number', number);
    localStorage.removeItem('words');
    setNumberWord(number);
    reloadWord(number);
  };

  useEffect(() => {
    if (wordsToday.length === 0) {
      reloadWord(numberWord);
    } else {
      setLoading(false);
    }
  }, [wordsToday.length, numberWord, reloadWord]);

  if (loading) return <Loading />;

  return (
    <Provider
      value={{
        wordsToday,
        reload,
        updateStatusWord,
        numberWord,
        handleChangeNumber
      }}
    >
      {children}
    </Provider>
  );
};

export { ProviderWordContext, wordContext as default };
