// @flow

import React from 'react';

type IconProps = {
  icon: any,
  style: any,
  size?: Number,
  color?: String
};

const Icon = ({ icon, style, size, color }: IconProps) => {
  return (
    <svg
      style={{
        ...style,
        display: 'inline-block',
        verticalAlign: 'middle'
      }}
      viewBox="0 0 1024 1024"
      width={size}
      height={size}
    >
      <g transform="scale(1, 1)">
        {icon.map(o => (
          <path key={o} d={o} fill={color} />
        ))}
      </g>
    </svg>
  );
};

Icon.defaultProps = { color: '#000', size: 25 };

export default Icon;
