import styled from 'styled-components';
import theme from '../../configs/theme';

const MessageWrap = styled.div`
  background: ${theme.color.error};
  padding: ${theme.size.space - 5}px ${theme.size.space}px;
  color: #fff;
  font-size: 14px;
  border-radius: ${theme.size.borderRadius}px;
  margin: 5px 0;
`;

export { MessageWrap };
