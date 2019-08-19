// @flow
import React, { memo, useContext } from 'react';
import wordContext from '../../state/wordContext';
import { Icon } from '../../components';
import theme from '../../configs/theme';
import { WordLine, Heading } from './style';
import icons from '../../assets/icons';

const Homepage = () => {
  const { wordsToday, reload, updateStatusWord } = useContext(wordContext);
  return (
    <div style={{ padding: 0 }}>
      <Heading>
        <h2
          style={{
            fontSize: 30,
            fontWeight: 300
          }}
        >
          Words
        </h2>
        <div
          onClick={reload}
          role="presentation"
          style={{
            border: `1px solid ${theme.color.border}`,
            height: 40,
            padding: '0 15px',
            borderRadius: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <Icon icon={icons.reload} size={15} />{' '}
        </div>
      </Heading>

      {wordsToday.map((w, i) => (
        <WordLine
          onClick={() => updateStatusWord(w)}
          key={w.word}
          style={{ textDecoration: w.status ? 'line-through' : 'none' }}
        >
          <span>{i + 1}.</span>
          {w.word}
        </WordLine>
      ))}
    </div>
  );
};

export default memo(Homepage);
