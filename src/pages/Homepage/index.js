// @flow
import React, { memo } from 'react';

import Tabs from './Tabs';
import Heading from './Heading';

const Homepage = () => {
  return (
    <>
      <Heading />
      <Tabs />
    </>
  );
};

export default memo(Homepage);
