// @flow
import React from 'react';
import { Link } from 'react-router-dom';

import connect from '../../state/connect';
import { Avatar } from '../../components';
import { HeadingWrap } from './style';

type HeadingProps = { user: any };

const Heading = ({ user }: HeadingProps) => {
  console.log('dsda', user);
  return (
    <>
      <HeadingWrap>
        <div style={{ paddingRight: 30 }}>
          <h2 style={{ margin: '5px 0', fontSize: 30 }}>
            Hi, {user.displayName}
          </h2>
          <p>Learn vocabulary every day</p>
        </div>

        <Link to="/profile">
          <Avatar />
        </Link>
      </HeadingWrap>
    </>
  );
};

const select = [{ values: ['user'], context: 'authContext' }];

export default connect(select)(Heading);
