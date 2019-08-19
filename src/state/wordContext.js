// @flow
import React, { createContext, useState, useEffect, type Node } from 'react';
import arrayWord from '../data';
import { generalWord } from './ultil';

const wordContext = createContext();
const { Provider } = wordContext;

type ProviderWordContextProps = { children: Node };

const ProviderWordContext = ({ children }: ProviderWordContextProps) => {
  const [loading, setLoading] = useState(true);
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

    setWordsToday(newWord);
  };

  useEffect(() => {
    if (wordsToday.length === 0) {
      setLoading(true);
      const words = generalWord(arrayWord);
      localStorage.setItem('words', JSON.stringify(words));
      setWordsToday(words);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [wordsToday]);

  if (loading) return <div>Loading</div>;

  return (
    <Provider value={{ wordsToday, reload, updateStatusWord }}>
      {children}
    </Provider>
  );
};

export { ProviderWordContext, wordContext as default };
