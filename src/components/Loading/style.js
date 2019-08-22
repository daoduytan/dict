import styled, { keyframes } from 'styled-components';
import theme from '../../configs/theme';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const SpinerWrap = styled.div`
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  border: 3px solid ${theme.color.border};
  border-radius: 50%;
  position: relative;

  .inner {
    border: 3px solid ${theme.color.border};
    border-right-color: red;
    border-radius: 50%;
    position: absolute;
    top: -3px;
    left: -3px;
    bottom: -3px;
    right: -3px;
    animation: ${rotate} 0.5s linear infinite;
  }
`;

const LoadingWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.8);
`;

export { LoadingWrap, SpinerWrap };
