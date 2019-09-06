import React, { useState } from 'react';
import moment from 'moment';

import { Icon } from '../../components';
import icons from '../../assets/icons';
import { firestore } from '../../api';
import theme from '../../configs/theme';
import { WordLine } from './style';
import connect from '../../state/connect';

const ref = firestore.collection('user');
const ref1 = firestore.collection('words_done');

type WordProps = {
  word: {
    word: String,
    status: String,
    number: Number,
    id: String
  },
  user: {
    uid: String
  },
  type: String,
  updateTypeDate: Function
};

const Word = ({ word, type, user, updateTypeDate }: WordProps) => {
  const [w, setW] = useState(word);

  const { uid } = user;

  const handleChangeType = () => {
    const newType = () => {
      if (type === 'today') {
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

    ref
      .doc(uid)
      .collection('word_today')
      .where('word', '==', w.word)
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
              type: newType()
            });
        });
      });

    setW({ ...w, type: newType() });

    updateTypeDate({ ...w, type: newType() });

    if (type === 'today') {
      ref1.add({ ...word, uid, type: newType() });
    } else {
      ref1

        .where('uid', '==', user.uid)
        .get()
        .then(snapshot => {
          if (snapshot.empty) {
            return null;
          }

          return snapshot.forEach(doc => {
            ref1.doc(doc.id).update({
              type: newType()
            });
          });
        });
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      <WordLine
        to={`/word/${w.word}`}
        key={w.word}
        style={{
          color: w.status ? theme.color.primary : theme.color.text
        }}
      >
        <span>{w.number + 1}.</span>
        <div
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingRight: 50
          }}
        >
          {w.word}
          {w.day && Date.now() - w.day + 7 * 24 * 60 * 60 * 1000 > 0 && (
            <div
              style={{
                color: theme.color.text,
                fontSize: 14,
                fontStyle: 'italic',
                fontWeight: 600,
                fontFamily: theme.font.family.primary
              }}
            >
              {moment(Date.now()).to(moment(w.day + 7 * 24 * 60 * 60 * 1000))}
            </div>
          )}

          {w.day && Date.now() - w.day + 7 * 24 * 60 * 60 * 1000 < 0 && (
            <div
              style={{
                color: 'red',
                fontSize: 16,
                fontWeight: 400,
                fontFamily: theme.font.family.primary
              }}
            >
              Time out
            </div>
          )}
        </div>
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

      {w.status && w.type === type && w.type !== 'month' && (
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

const select = [
  { values: ['user'], context: 'authContext' },
  {
    values: ['updateTypeDate'],
    context: 'wordContext'
  }
];

export default connect(select)(Word);
