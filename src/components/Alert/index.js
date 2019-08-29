import React from 'react';
import styled from 'styled-components';
import theme from '../../configs/theme';
import Icon from '../Icon';
import icons from '../../assets/icons';

const background = type => {
  if (type === 'error') return theme.color.error;

  if (type === 'warning') return theme.color.secondary;

  return theme.color.primary;
};

const AlertStyle = styled.div`
  background: ${({ type }) => background(type)};
  color: #fff;
  padding: ${theme.size.space}px;
  border-radius: ${theme.size.borderRadius}px;
  margin-bottom: ${theme.size.space}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  font-size: 14px;
`;

const Close = styled.div`
  padding: ${theme.size.space - 5}px 0 ${theme.size.space - 5}px
    ${theme.size.space}px;
`;

type AlertProps = {
  message: String,
  type?: String,
  onClose: Function
};

const Alert = ({ message, type, onClose }: AlertProps) => {
  return (
    <AlertStyle type={type}>
      <span style={{ flex: 1 }}>{message}</span>
      <Close onClick={onClose} role="presentation">
        <Icon icon={icons.close} color="#fff" />
      </Close>
    </AlertStyle>
  );
};

Alert.defaultProps = {
  type: 'success'
};

export default Alert;
