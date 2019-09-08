import React from 'react';
import styled from 'styled-components';
import Icon from '../Icon';
import icons from '../../assets/icons';
import { avatar_default } from '../../assets/images';

console.log('dasdas', avatar_default);

const AvatarStyle = styled.div`
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  border-radius: ${({ circle }) => (circle ? '50%' : '5px')};
  background-color: #eee;
  background-image: ${({ image }) => `url(${image ? image : avatar_default})`};
  background-size: cover;
  background-position: center;
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
  return <AvatarStyle {...props}></AvatarStyle>;
};

Avatar.defaultProps = {
  image: '',
  size: 50,
  circle: true
};

export default Avatar;
