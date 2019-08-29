import React from 'react';
import { Link } from 'react-router-dom';

import { Logo, Button } from '../../components';
import theme from '../../configs/theme';
import { learn } from '../../assets/images';

const Start = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'space-between',
        flexDirection: 'column',
        padding: `${theme.size.space}px ${theme.size.space * 2}px`
      }}
    >
      <Logo size={30} />
      <div style={{ marginTop: 30, marginBottom: 30 }}>
        <div>
          <img src={learn} alt="" style={{ display: 'block', width: '100%' }} />
        </div>

        <h2
          style={{
            marginBottom: 10,
            fontFamily: theme.font.family.secondary,
            fontSize: 30
          }}
        >
          Wellcome to 3000 vocabulary
        </h2>

        <p style={{ color: theme.color.primary }}>Try to learn English now.</p>
      </div>

      <div style={{ width: '100%', display: 'grid', gridGap: 15 }}>
        <Link to="/login" style={{ width: '100%' }}>
          <Button type="primary" block size="large">
            Login
          </Button>
        </Link>

        <Link to="/signup" style={{ width: '100%' }}>
          <Button block size="large">
            Signup
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Start;
