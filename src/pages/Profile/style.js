import styled from 'styled-components';
import { Link } from 'react-router-dom';

import theme from '../../configs/theme';

const Heading = styled.div`
  minheight: 150px;
  padding-bottom: ${theme.size.space}px;
  display: flex;
  align-items: center;
  flexdirection: column;
  justify-content: center;
  border-bottom: 1px solid ${theme.color.border};
`;

const BoxStyle = styled.div`
  overflow: hidden;
`;

const TitleStyle = styled.div`
  font-weight: 700;
`;

const RowLine = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${theme.color.border};
  padding: ${theme.size.space * 1.5}px ${theme.size.space * 2}px;

  .label {
    color: #999;
    font-weight: 600;
  }

  span:last-child {
    font-size: 18px;
    font-weight 700;
    color: ${theme.color.primary}
  }
`;

export { Heading, BoxStyle, TitleStyle, RowLine };
