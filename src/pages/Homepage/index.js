// @flow
import React, { memo } from 'react';

import { Layout } from '../../components';
import Tabs from './Tabs';
import Heading from './Heading';

const Homepage = () => {
  return (
    <Layout>
      <div style={{ background: '#f5f7f9', minHeight: 'calc(100vh - 60px)' }}>
        <Heading />
        <Tabs />
      </div>
    </Layout>
  );
};

export default memo(Homepage);
