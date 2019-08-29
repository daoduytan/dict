// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import connect from '../../state/connect';
import { Avatar } from '../../components';
import { HeadingWrap } from './style';
import theme from '../../configs/theme';

type HeadingProps = { user: any };

const Heading = ({ user }: HeadingProps) => {
  return (
    <>
      <HeadingWrap>
        <div style={{ paddingRight: 30 }}>
          <h2
            style={{
              margin: '5px 0 0',
              fontSize: 30,
              fontFamily: theme.font.family.secondary
            }}
          >
            Hi, {user.displayName}
          </h2>
          <small style={{ color: theme.color.primary }}>
            Date: {moment(new Date()).format('DD-MM-YYYY')}
          </small>
          <p style={{ lineHeight: 1.5, fontSize: 17, fontWeight: 600 }}>
            10 vocabulary for today
          </p>
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
