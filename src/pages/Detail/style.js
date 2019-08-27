import styled from 'styled-components';
import theme from '../../configs/theme';

const DetailWrap = styled.div`
  padding-top: 60px;
`;

const Heading = styled.div`
  display: flex;
  alignitems: center;
  padding: ${theme.size.space * 2}px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #fff;
`;

const DetailContent = styled.div`
  padding: ${theme.size.space}px ${theme.size.space * 2}px;
`;

const CardStyle = styled.div`
  padding: 15px;
  margin-bottom: 15px;
  border: 1px solid #eee;
  background: #fff;
  border-radius: 5px;
`;

const CarTitleStyle = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: ${theme.color.primary};
`;

const CardTitleSubStyle = styled.div`
  border-bottom: 1px solid #eee;
  padding-bottom: 15px;
  font-size: 12px;
  margin-top: 5px;
`;

const NumberStyle = styled.div`
  background: ${theme.color.secondary};
  height: 20px;
  width: 20px;
  border-radius: 20px;
  line-height: 20px;
  text-align: center;
  color: #fff;
  font-weight: 700;
  font-size: 12px;
  margin-right: 15px;
`;

export {
  DetailWrap,
  Heading,
  DetailContent,
  CardStyle,
  CarTitleStyle,
  CardTitleSubStyle,
  NumberStyle
};
