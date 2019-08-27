import React from 'react';
// import { Card } from '@uifabric/react-cards';
import FormLogin from './FormLogin';
import theme from '../../configs/theme';

const Login = () => {
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
        <h2 style={{ marginBottom: 30 }}>Login</h2>
        <FormLogin />
      </div>
    </div>
  );
};

export default Login;
