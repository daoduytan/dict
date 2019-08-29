import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Avatar, Icon, Button, Modal } from '../../components';
import connect from '../../state/connect';
import theme from '../../configs/theme';
import icons from '../../assets/icons';
import HeadingScreen from '../../components/HeadingScreen';
import ModalResetCache from './ModalResetCache';

const Heading = styled.div`
  minheight: 150px;
  padding-bottom: ${theme.size.space}px;
  display: flex;
  align-items: center;
  flexdirection: column;
  justify-content: center;
  border-bottom: 1px solid ${theme.color.border};
`;

const BoxStyle = styled.div`
  overflow: hidden;
`;

const TitleStyle = styled.div`
  font-weight: 700;
`;

const RowLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${theme.color.border};
  padding: ${theme.size.space * 1.5}px ${theme.size.space * 2}px;

  .label {
    color: #999;
    font-weight: 600;
  }

  span:last-child {
    font-size: 18px;
    font-weight 700;
    color: ${theme.color.primary}
  }
`;

type ProfileProps = {
  user: {
    displayName: String,
    email: String
  },
  logout: Function
};

const Profile = ({ user, logout }: ProfileProps) => {
  return (
    <>
      <HeadingScreen title="Profile" />

      <Heading>
        <div style={{ marginBottom: 30 }}>
          <Avatar size={100} />
          <div>{user.displayName}</div>
        </div>
      </Heading>
      <div>
        <BoxStyle>
          <Link to="edit-profile">
            <RowLine style={{ background: '#f9f9f9' }}>
              <TitleStyle>Profile</TitleStyle>
              <div>
                <Icon icon={icons.right} size={16} />
              </div>
            </RowLine>
          </Link>

          <RowLine>
            <span className="label">Display name</span>
            <span>{user.displayName}</span>
          </RowLine>

          <RowLine>
            <span className="label">Email</span>
            <span>{user.email}</span>
          </RowLine>
        </BoxStyle>

        <BoxStyle>
          <Link to="edit-word">
            <RowLine style={{ background: '#f9f9f9' }}>
              <TitleStyle>Setting</TitleStyle>
              <div>
                <Icon icon={icons.right} size={16} />
              </div>
            </RowLine>
          </Link>
          <RowLine>
            <span className="label">Number word</span>
            <span>10</span>
          </RowLine>

          <RowLine>
            <span className="label">Reset cached</span>
            <Modal label={<Button>Reset cached</Button>}>
              <ModalResetCache />
            </Modal>
          </RowLine>
        </BoxStyle>

        <div style={{ margin: theme.size.space * 2 }}>
          <Button block size="large" onClick={logout}>
            Log out
          </Button>
        </div>
      </div>
    </>
  );
};

const select = [{ values: ['user', 'logout'], context: 'authContext' }];

export default connect(select)(Profile);
