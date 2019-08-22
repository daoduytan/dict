import React, { useContext, useState } from 'react';
import { Input, Button } from '../../components';
import theme from '../../configs/theme';

import wordContext from '../../state/wordContext';

const FormChangeNumber = () => {
  const { numberWord, handleChangeNumber } = useContext(wordContext || 9);
  const [number, setNumber] = useState(numberWord);

  const onChange = e => {
    setNumber(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    handleChangeNumber(number);
  };

  return (
    <form onSubmit={onSubmit}>
      <p
        style={{
          fontSize: 20,
          fontWeight: 700,
          fontFamily: theme.font.family.secondary
        }}
      >
        Change number word
      </p>
      <Input
        block
        size="large"
        value={number}
        onChange={onChange}
        type="number"
      />
      <div style={{ marginBottom: theme.size.space }} />
      <Button block size="large" type="primary" htmlType="submit">
        Change now
      </Button>
    </form>
  );
};

export default FormChangeNumber;
