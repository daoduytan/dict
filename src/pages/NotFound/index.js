import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../../components';
import { not_found } from '../../assets/images';

const NotFound = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}
    >
      <img
        src={not_found}
        alt="404"
        style={{ width: '70%', display: 'block' }}
      />
      <Link to="/">
        <Button size="large">Back to Homepage</Button>
      </Link>
    </div>
  );
};
export default NotFound;
