import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import { Icon } from '..';
import icons from '../../assets/icons';
import theme from '../../configs/theme';
import connect from '../../state/connect';
import { FooterBarWrap, ItemStyle } from './style';

const Item = withRouter(({ icon, path, title, history }) => {
  const { location } = history;
  const { pathname } = location;

  const active = pathname.indexOf(path) !== -1;

  if (active) {
    return (
      <ItemStyle className="active">
        <Icon icon={icon} color={theme.color.primary} />
        <span
          style={{
            color: theme.color.primary
          }}
        >
          {title}
        </span>
      </ItemStyle>
    );
  }

  return (
    <Link to={path}>
      <ItemStyle>
        <Icon icon={icon} color={theme.color.text} />
        <span
          style={{
            color: theme.color.text
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
    path: '/main'
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

type FooterBarProps = { isAuth: Boolean };

const FooterBar = ({ isAuth }: FooterBarProps) => {
  if (!isAuth) return null;
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
