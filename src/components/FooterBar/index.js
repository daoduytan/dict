import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import styled from 'styled-components';

import { Icon } from '..';
import icons from '../../assets/icons';
import theme from '../../configs/theme';
import connect from '../../state/connect';

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

const Item = withRouter(({ icon, path, title, history, isAuth }) => {
  if (!isAuth) return null;

  const { location } = history;

  const { pathname } = location;

  const active = pathname === path;

  return (
    <Link to={path}>
      <ItemStyle className={active ? 'active' : null}>
        <Icon
          icon={icon}
          color={active ? theme.color.primary : theme.color.text}
        />
        <span
          style={{
            color: active ? theme.color.primary : theme.color.text
          }}
        >
          {title}
        </span>
      </ItemStyle>
    </Link>
  );
});

const menus = [
  {
    icon: icons.home,
    title: 'Home',
    path: '/'
  },
  {
    icon: icons.book,
    title: 'Words',
    path: '/words-done'
  },
  {
    icon: icons.user,
    title: 'Me',
    path: '/profile'
  }
];

const FooterBar = () => {
  return (
    <FooterBarWrap>
      {menus.map(m => (
        <Item {...m} key={m.path} />
      ))}
    </FooterBarWrap>
  );
};

const enhance = connect([{ values: ['isAuth'], context: 'authContext' }]);

export default enhance(FooterBar);
