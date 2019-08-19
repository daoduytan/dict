import styled from 'styled-components';

import theme from '../../configs/theme';

const WordLine = styled.div`
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
`;

export { WordLine, Heading };
