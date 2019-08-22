// @flow
import React from 'react';
import { Card } from '@uifabric/react-cards';

import FormSignup from './FormSignup';

const Signup = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: 15
      }}
    >
      <Card
        style={{
          padding: 15,
          width: '100%',
          maxWidth: 400,
          background: '#fff'
        }}
      >
        <h2>Sign up</h2>

        <FormSignup />
      </Card>
    </div>
  );
};

export default Signup;
