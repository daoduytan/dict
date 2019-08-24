import React from 'react';
import { Card } from '@uifabric/react-cards';
import FormLogin from './FormLogin';
import theme from '../../configs/theme';

const Login = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: theme.size.space
      }}
    >
      <Card
        style={{
          width: '100%',
          maxWidth: 400,
          padding: theme.size.space * 2,
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
