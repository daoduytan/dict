import React from 'react';
import { LoadingWrap } from './style';

import { loading } from '../../assets/images';

const Loading = () => {
  return (
    <LoadingWrap>
      <img
        src={loading}
        alt="loading"
        style={{ display: 'block', width: '100%' }}
      />
    </LoadingWrap>
  );
};

export default Loading;
