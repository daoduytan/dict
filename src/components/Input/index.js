import React from 'react';
import theme from '../../configs/theme';

type Props = {
  label?: String,
  block?: Boolean,
  size?: String,
  error: String
};

const Input = ({ label, error, block, size, ...props }: Props) => {
  const display = block ? 'block' : 'inline-block';
  const width = block ? '100%' : 'default';
  const padding = size === 'large' ? '15px 10px' : '7px 10px';

  const borderColor = error ? theme.color.error : theme.color.border;

  return (
    <>
      {label && (
        <div style={{ marginBottom: 10, fontWeight: 600, fontSize: 14 }}>
          {label}
        </div>
      )}
      <input
        {...props}
        style={{
          display,
          width,
          padding,
          border: `1px solid ${borderColor}`,
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
