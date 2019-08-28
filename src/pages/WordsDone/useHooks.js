import { useState, useEffect } from 'react';
import { firestore } from '../../api';

const ref = firestore.collection('words_done');

const useWordsDone = user => {
  const [loading, setLoading] = useState(true);
  const [words, setWords] = useState([]);

  useEffect(() => {
    const { uid } = user;

    ref.where('uid', '==', uid).onSnapshot(docSnapshot => {
      const wordsDone = [];
      setLoading(true);
      docSnapshot.forEach(docs => wordsDone.push(docs.data()));

      setWords(wordsDone);
      setLoading(false);
    });
  }, [user]);

  return [loading, words];
};

// eslint-disable-next-line
export { useWordsDone };
