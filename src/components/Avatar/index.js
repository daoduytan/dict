import React from 'react';
import styled from 'styled-components';
import Icon from '../Icon';
import icons from '../../assets/icons';

const AvatarStyle = styled.div`
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  border-radius: ${({ circle }) => (circle ? '50%' : '5px')};
  background: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
`;

type AvatarProps = {
  image?: String,
  size?: Number,
  circle?: Boolean
};

const Avatar = ({ image, ...props }: AvatarProps) => {
  return (
    <AvatarStyle {...props}>
      {image.length === 0 && <Icon icon={icons.user} />}
    </AvatarStyle>
  );
};

Avatar.defaultProps = {
  image: '',
  size: 50,
  circle: true
};

export default Avatar;
