import React from 'react';
import { Card } from '@uifabric/react-cards';
import FormLogin from './FormLogin';

const Login = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: 15
      }}
    >
      <Card
        style={{
          width: '100%',
          maxWidth: 400,
          padding: 15,
          background: '#fff'
        }}
        title="Login"
      >
        <h2>Login</h2>

        <FormLogin />
      </Card>
    </div>
  );
};

export default Login;
