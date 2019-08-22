import React from 'react';
import { Spinner, SpinnerSize } from 'office-ui-fabric-react/lib/Spinner';

import { LoadingWrap } from './style';

const Loading = () => {
  return (
    <LoadingWrap>
      <Spinner size={SpinnerSize.large} />
    </LoadingWrap>
  );
};

export default Loading;
