import React from 'react';
import { Icon } from '../../components';
import icons from '../../assets/icons';
import theme from '../../configs/theme';

const TopBar = () => {
  return (
    <div style={{ padding: '25px 30px 5px', background: theme.color.primary }}>
      <div>
        <Icon icon={icons.menu} color="#fff" />
      </div>
    </div>
  );
};

export default TopBar;
