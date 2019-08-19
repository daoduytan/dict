import React from 'react';
import { Icon } from '..';
import icons from '../../assets/icons';

const Navigation = () => {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: 50,
        background: '#eee',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
      }}
    >
      <div>
        <Icon icon={icons.home} />
      </div>
      <div>
        {' '}
        <Icon icon={icons.home} />
      </div>
      <div>
        {' '}
        <Icon icon={icons.home} />
      </div>
    </div>
  );
};

export default Navigation;
