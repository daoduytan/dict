import styled from 'styled-components';
import theme from '../../configs/theme';

const FooterBarWrap = styled.div`
  display: grid;
  background: #fff;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  grid-template-columns: repeat(3, 1fr);
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
`;

const ItemStyle = styled.div`
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-top: 10px;
  &.active {
    &:before {
      position: absolute;
      top: 0;
      left: 50%;
      margin-left: -5px;
      content: '';
      display: block;
      height: 5px;
      width: 10px;
      border-radius: 0 0 5px 5px;
      background: ${theme.color.primary};
    }
  }

  span {
    display: block;
    font-size: 10px;
    text-transform: uppercase;
    font-weight: 600;
    margin-top: 7px;
  }
`;

export { FooterBarWrap, ItemStyle };
