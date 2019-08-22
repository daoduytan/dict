// @flow
import React, { useState } from 'react';
import { PrimaryButton, DefaultButton } from 'office-ui-fabric-react';
import { Formik } from 'formik';

import { Link } from 'react-router-dom';

import { TextField } from 'office-ui-fabric-react/lib/TextField';

import { fireauth } from '../../api';

const FormSignup = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const validate = value => {
    // if()
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = values;

    setLoading(true);
    fireauth
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
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
        {loading ? 'Loading' : 'Submit'}
      </PrimaryButton>
      <Link to="/login">
        <DefaultButton style={{ width: '100%' }}>Login</DefaultButton>
      </Link>
    </form>
  );
};

export default FormSignup;
