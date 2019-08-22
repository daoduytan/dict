import React from 'react';
import theme from '../../configs/theme';

type Props = {
  label?: String,
  block?: Boolean,
  size?: String
};

const Input = ({ label, block, size, ...props }: Props) => {
  const display = block ? 'block' : 'inline-block';
  const width = block ? '100%' : 'default';
  const padding = size === 'large' ? '10px 15px' : '7px 10px';
  return (
    <>
      {label && <div style={{ marginBottom: 10 }}>{label}</div>}
      <input
        {...props}
        style={{
          display,
          width,
          padding,
          border: `1px solid ${theme.color.border}`,
          borderRadius: 5
        }}
      />
    </>
  );
};

Input.defaultProps = {
  label: null,
  block: false,
  size: 'default'
};

export default Input;
