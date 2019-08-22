import styled from 'styled-components';
import { Link } from 'react-router-dom';
import theme from '../../configs/theme';

const WordLine = styled(Link)`
  height: 70px;
  display: flex;
  align-items: center;
  font-size: 25px;
  font-weight: 700;
  padding: 15px;
  border-bottom: 1px solid ${theme.color.border};
  font-family: ${theme.font.family.secondary};

  span {
    text-align: center;
    display: inline-block;
    width: 50px;
    margin-right: 30px;
    color: rgba(0, 0, 0, 0.4);
  }
`;

const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid ${theme.color.border};
  background: #f9f9f9;
`;

const Button = styled.div`
  border: 1px solid ${theme.color.border};
  height: 40px;
  padding: 0 15px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: #fff;
`;

export { WordLine, Heading, Button };
