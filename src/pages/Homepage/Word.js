import React, { memo, useState } from 'react';

import { Icon } from '../../components';
import icons from '../../assets/icons';
import { firestore } from '../../api';
import theme from '../../configs/theme';
import { WordLine } from './style';

const ref = firestore.collection('words_today');
const ref1 = firestore.collection('words_done');

type WordProps = {
  word: {
    word: String,
    status: String,
    number: Number,
    id: String
  },
  type: String
};

const Word = ({ word, type }: WordProps) => {
  console.log(word, type);

  const [w, setW] = useState(word);

  const handleChangeType = () => {
    const newType = () => {
      if (word === 'today') {
        return 'day';
      }
      if (type === 'day') {
        return 'week';
      }
      if (type === 'week') {
        return 'month';
      }

      return 'day';
    };

    // console.log('dadas', newType(), w);

    ref
      .where('word', '==', w.word)
      .get()
      .then(snapshot => {
        if (snapshot.empty) {
          return null;
        }

        snapshot.forEach(doc => {
          console.log(doc.data());

          ref.doc(doc.id).update({
            type: newType()
          });
        });
      });

    setW({ ...w, type: newType() });

    ref1.add({ ...word, type: newType() });
  };

  return (
    <div style={{ position: 'relative' }}>
      <WordLine
        to={`/word/${w.word}`}
        key={w.word}
        style={{
          textDecoration: w.status ? 'line-through' : 'none',
          color: w.status ? theme.color.primary : theme.color.text
        }}
      >
        <span>{w.number + 1}.</span>
        {w.word}
      </WordLine>

      {w.status && w.type !== type && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            padding: '0 15px',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <Icon icon={icons.check} size={20} color={theme.color.secondary} />
        </div>
      )}

      {w.status && w.type === type && (
        <div
          onClick={handleChangeType}
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            padding: '0 15px',
            display: 'flex',
            alignItems: 'center'
          }}
          role="presentation"
        >
          <Icon icon={icons.right} size={20} color={theme.color.primary} />
        </div>
      )}
    </div>
  );
};

export default Word;
