// @flow
import { lastIndexOf } from 'lodash';
import arrayWord from '../data';

const generalWord = int => {
  const data = arrayWord;
  const max = data.length;
  const min = 1;
  const n = int;

  const words = [];
  const getWords = number => {
    const word = data[number];
    const index = lastIndexOf(words, word);
    if (index === -1) return word;

    return getWords(number);
  };

  for (let i = min; i <= n; i += 1) {
    const number = Math.floor(Math.random() * max);
    const word = getWords(number);
    words.push({ word, status: false });
  }

  return words;
};

// eslint-disable-next-line
export { generalWord };
