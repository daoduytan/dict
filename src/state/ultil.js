// @flow
import { lastIndexOf, differenceBy } from 'lodash';
import arrayWord from '../data';
import { firestore } from '../api';

const getWordsDone = async () => {
  const snapshot = await firestore.collection('words_done').get();
  return snapshot.docs.map(doc => {
    const { word } = doc.data();
    return word;
  });
};

const getWordsNotDone = async () => {
  const words_done = await getWordsDone();

  const words_not_done = differenceBy(arrayWord, words_done);

  return words_not_done;
};

const generalWord = async int => {
  const data = await getWordsNotDone();
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
