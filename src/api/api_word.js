import words from '../data/data';

const getDetailWord = word => {
  const word_detail = words.find(w => {
    if (!w) return false;
    const word_child = w.data[0];
    if (!word_child) return null;

    return w.data[0].title === word;
  });

  return word_detail;
};

// eslint-disable-next-line
export { getDetailWord };
