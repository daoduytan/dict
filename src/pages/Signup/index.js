// @flow
import React from 'react';

import FormSignup from './FormSignup';
import { Logo } from '../../components';

const Signup = () => {
  return (
    <>
      <div style={{ padding: '20px 30px', position: 'fixed', top: 0 }}>
        <Logo size={30} />
      </div>
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
    </>
  );
};

export default Signup;
