import React, { type Node } from 'react';

import styled from 'styled-components';
import theme from '../../configs/theme';

const display = block => (block ? 'block' : 'inline-block');
const width = block => (block ? '100%' : 'default');
const padding = size => (size === 'large' ? '15px' : '7px 10px');

const background = (disabled, type) => {
  if (disabled) return theme.color.border;
  if (type === 'primary') return theme.color.primary;
  if (type === 'secondary') return theme.color.secondary;
  return theme.color.border;
};
const color = type => (type === 'primary' ? '#fff' : '#000');

const colorBorder = type => {
  if (type === 'primary') return theme.color.primary;
  if (type === 'secondary') return theme.color.secondary;
  return theme.color.border;
};

export const ButtonWrap = styled.button`
  display: ${({ block }) => display(block)};
  width: ${({ block }) => width(block)};
  padding: ${({ size }) => padding(size)};
  background: ${({ type, disabled }) => background(disabled, type)};
  color: ${({ type }) => color(type)};
  border: 1px solid;
  border-color: ${({ type }) => colorBorder(type)};
  text-align: center;
  border-radius: 5px;
  line-height: 1;
  font-weight: 700;
  cursor: pointer;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

type ButtonProps = {
  children: Node,
  loading: Boolean
};

const Button = ({ children, loading, ...props }: ButtonProps) => {
  return <ButtonWrap {...props}>{loading ? 'Loading' : children} </ButtonWrap>;
};

export { Button as default };
