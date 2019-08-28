// @flow
import React from 'react';

import { logo } from '../../assets/images';

const Logo = ({ size }: { size?: Number }) => {
  return (
    <div>
      <img src={logo} alt="Logo" style={{ width: size }} />
    </div>
  );
};

Logo.defaultProps = {
  size: 50
};

export default Logo;
