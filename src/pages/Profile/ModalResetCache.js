// @flow
import React, { useState } from 'react';
import styled from 'styled-components';

import connect from '../../state/connect';
import { Button } from '../../components';
import theme from '../../configs/theme';

const Title = styled.div`
  font-size: 20px;
  font-family: ${theme.font.family.secondary};
  margin-bottom: ${theme.size.space + 5}px;
  line-height: 1.5;
  font-weight: 600;
`;

type ModalResetCacheProps = {
  onClick: Function,
  reload: Function
};

const ModalResetCache = ({ onClick, reload }: ModalResetCacheProps) => {
  const [success, setSuccess] = useState(false);

  const resetCache = () => {
    localStorage.removeItem('words');
    setSuccess(true);
  };

  const renderContent = () => {
    if (success) {
      return (
        <>
          <Title>Cache has been reset</Title>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gridGap: theme.size.space
            }}
          >
            <Button onClick={onClick} size="large" block>
              Exit
            </Button>

            <Button onClick={reload} size="large" block type="primary">
              Reload data
            </Button>
          </div>
        </>
      );
    }

    return (
      <>
        <Title>Do you want to clear the cache?</Title>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridGap: theme.size.space
          }}
        >
          <Button onClick={onClick} size="large" block>
            Exit
          </Button>

          <Button type="primary" onClick={resetCache} size="large" block>
            Yes, i do
          </Button>
        </div>
      </>
    );
  };

  return <div style={{ textAlign: 'center' }}>{renderContent()}</div>;
};

const enhance = connect([{ values: ['reload'], context: 'wordContext' }]);

export default enhance(ModalResetCache);
