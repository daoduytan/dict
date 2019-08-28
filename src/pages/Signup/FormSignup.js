// @flow
import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { fireauth } from '../../api';
import { Input, Button, Message } from '../../components';
import theme from '../../configs/theme';

const FormSignup = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const validate = () => {
    const errorValidate = {};
    const { email, password } = values;
    if (email.length === 0) errorValidate.email = 'Required';
    if (password.length === 0) errorValidate.password = 'Required';
    if (password.length < 8) errorValidate.password = 'Password 8 letter';

    return errorValidate;
  };
  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = values;

    setLoading(true);

    const getError = validate();

    if (Object.keys(getError).length > 0) {
      setError(getError);
      setLoading(false);
    } else {
      fireauth
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    }
  };

  const onChange = e => {
    const newValues = { ...values, [e.target.name]: e.target.value };
    setValues(newValues);
  };

  const { email, password } = values;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Input
          placeholder="Your email"
          type="email"
          name="email"
          size="large"
          block
          onChange={onChange}
          value={email}
          label="Email"
          error={!!error.email}
        />
      </div>
      {error.email && <Message>{error.email}</Message>}
      <div style={{ margin: `${theme.size.space * 2}px 0` }}>
        <Input
          type="password"
          name="password"
          onChange={onChange}
          size="large"
          value={password}
          block
          label="Password"
          placeholder="Your password"
          error={!!error.password}
        />

        {error.password && <Message>{error.password}</Message>}
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gridGap: theme.size.space
        }}
      >
        <Button
          htmlType="submit"
          type="primary"
          block
          size="large"
          loading={loading}
        >
          Submit
        </Button>

        <Link to="/login">
          <Button block size="large">
            Login
          </Button>
        </Link>
      </div>
    </form>
  );
};

export default FormSignup;
