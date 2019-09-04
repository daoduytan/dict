import React from 'react';

import { Avatar, Icon, Button, Modal, Layout } from '../../components';
import connect from '../../state/connect';
import theme from '../../configs/theme';
import icons from '../../assets/icons';
import HeadingScreen from '../../components/HeadingScreen';
import ModalResetCache from './ModalResetCache';
import { Heading, BoxStyle, TitleStyle, RowLine } from './style';

type ProfileProps = {
  user: {
    displayName: String,
    email: String
  },
  logout: Function
};

const Profile = ({ user, logout }: ProfileProps) => {
  return (
    <Layout>
      <HeadingScreen title="Profile" />

      <Heading>
        <div style={{ marginBottom: 30 }}>
          <Avatar size={100} />
          <div>{user.displayName}</div>
        </div>
      </Heading>
      <div>
        <BoxStyle>
          <RowLine style={{ background: '#f9f9f9' }} to="/profile">
            <TitleStyle>Profile</TitleStyle>
            <div>
              <Icon icon={icons.user} size={16} />
            </div>
          </RowLine>

          <RowLine to="/profile">
            <span className="label">Display name</span>
            <span>{user.displayName}</span>
          </RowLine>

          <RowLine to="/profile">
            <span className="label">Email</span>
            <span>{user.email}</span>
          </RowLine>
        </BoxStyle>

        <BoxStyle>
          <RowLine style={{ background: '#f9f9f9' }} to="/profile">
            <TitleStyle>Setting</TitleStyle>
            <div>
              <Icon icon={icons.setting} size={16} />
            </div>
          </RowLine>
          <RowLine to="setting-number">
            <span className="label">Number word</span>
            <span>{localStorage.getItem('number') || 10}</span>
          </RowLine>
        </BoxStyle>

        <div
          style={{
            margin: theme.size.space * 2,
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridGap: theme.size.space * 2
          }}
        >
          <Button block size="large" onClick={logout}>
            Log out
          </Button>
          <Modal
            label={
              <Button type="secondary" size="large" block>
                Reset cached
              </Button>
            }
          >
            <ModalResetCache />
          </Modal>
        </div>
      </div>
    </Layout>
  );
};

const select = [{ values: ['user', 'logout'], context: 'authContext' }];

export default connect(select)(Profile);
