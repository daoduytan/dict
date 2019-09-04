import React from 'react';
import { Layout, HeadingScreen } from '../../components';
import SettingNumberForm from './SettingNumberForm';

const SettingNumber = () => {
  return (
    <Layout>
      <HeadingScreen title="Setting number word" />

      <SettingNumberForm />
    </Layout>
  );
};

export default SettingNumber;
