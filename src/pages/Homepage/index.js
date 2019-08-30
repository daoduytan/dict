// @flow
import React, { memo } from 'react';

import { Layout } from '../../components';
import Tabs from './Tabs';
import Heading from './Heading';

const Homepage = () => {
  return (
    <Layout>
      <Heading />
      <Tabs />
    </Layout>
  );
};

export default memo(Homepage);
