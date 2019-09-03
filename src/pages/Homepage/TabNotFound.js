import React from 'react';
import notfound from '../../assets/notfound.jpg';

const TabNotFound = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 'calc(100vh - 178px - 55px - 60px)'
      }}
    >
      <img src={notfound} alt="" style={{ display: 'block', width: '80%' }} />
    </div>
  );
};

export default TabNotFound;
