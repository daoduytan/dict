import React, { memo } from 'react';

import { no_word } from '../../assets/images';
import theme from '../../configs/theme';

const NoWord = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '70px 0'
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <img src={no_word} alt="" style={{ width: 200 }} />
        <div style={{ fontSize: 18, fontFamily: theme.font.family.secondary }}>
          No word
        </div>
      </div>
    </div>
  );
};

export default memo(NoWord);
