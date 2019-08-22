// @flow
import React, { useState } from 'react';
import { PrimaryButton, DefaultButton } from 'office-ui-fabric-react';

import { Link } from 'react-router-dom';

import { TextField } from 'office-ui-fabric-react/lib/TextField';

import { fireauth } from '../../api';
import connect from '../../state/connect';

const FormLogin = ({ setAuth }) => {
  const [loading, setLoading] = useState(false);

  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = values;
    setLoading(true);
    fireauth
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        setLoading(false);
        setAuth({ user: res, isAuth: true });
      })
      .catch(err => {
        setLoading(false);
        console.log('err', err);
      });
  };

  const onChange = e => {
    const newValues = { ...values, [e.target.name]: e.target.value };
    setValues(newValues);
  };

  const { email, password } = values;

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        placeholder="Your email"
        type="email"
        name="email"
        value={email}
        onChange={onChange}
        label="Email"
        iconProps={{ iconName: 'Calendar' }}
        required
      />

      <div style={{ marginBottom: 30 }} />

      <TextField
        placeholder="Your password"
        type="password"
        name="password"
        value={password}
        onChange={onChange}
        label="Password"
        iconProps={{ iconName: 'Calendar' }}
        required
      />
      <div style={{ marginBottom: 30 }} />

      <PrimaryButton type="submit" style={{ width: '100%', marginBottom: 15 }}>
        {loading ? 'Loading' : 'Login'}
      </PrimaryButton>
      <Link to="/sign-up">
        <DefaultButton style={{ width: '100%' }}>Sign up</DefaultButton>
      </Link>
    </form>
  );
};

const select = [{ values: ['setAuth'], context: 'authContext' }];

export default connect(select)(FormLogin);
