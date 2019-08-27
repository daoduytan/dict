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
      <div style={{ width: '90%', maxWidth: 350 }}>
        <h2 style={{ marginBottom: 30 }}>Sign up</h2>

        <FormSignup />
      </div>
    </div>
  );
};

export default Signup;
