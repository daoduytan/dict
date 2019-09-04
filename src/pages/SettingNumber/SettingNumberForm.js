import React, { useState, useEffect } from 'react';

import { firestore } from '../../api';
import { Input, Button } from '../../components';
import theme from '../../configs/theme';
import connect from '../../state/connect';

const SettingNumberForm = ({ user }) => {
  const [loading, setLoading] = useState(false);
  const [number, setNumber] = useState(() => {
    const localNumber = localStorage.getItem('number');
    return localNumber || 10;
  });

  console.log('user', user);

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    firestore
      .collection('user')
      .doc(user.uid)
      .set({ number });
    setLoading(false);
  };

  useEffect(() => {
    localStorage.setItem('number', number);
  }, [number]);

  const onChangeNumber = e => {
    setNumber(e.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'grid',
        padding: theme.size.space * 2,
        gridGap: 15,
        margin: theme.size.space
      }}
    >
      <Input
        type="number"
        size="large"
        block
        placeholder="Ex. 10"
        value={number}
        onChange={onChangeNumber}
        style={{
          fontSize: 18,
          fontWeight: 700,
          textAlign: 'center'
        }}
      />
      <Button block type="primary" size="large">
        Change number
      </Button>
    </form>
  );
};

const enhance = connect([{ values: ['user'], context: 'authContext' }]);

export default enhance(SettingNumberForm);
