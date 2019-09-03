import styled from 'styled-components';
import theme from '../../configs/theme';

const DetailWrap = styled.div``;

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

const Title = styled.div`
  text-align: center;
  font-size: 40px;
  font-weight: 700;
  line-height: 1;
  font-family: ${theme.font.family.secondary};
  margin: 0 0 ${theme.size.space * 2}px;
`;

const GroupAudio = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 12px;

  .item {
    display: flex;
    align-items: center;
  }
`;

export {
  Title,
  DetailWrap,
  DetailContent,
  CardStyle,
  CarTitleStyle,
  CardTitleSubStyle,
  NumberStyle,
  GroupAudio
};
