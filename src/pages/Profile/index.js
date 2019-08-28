import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Avatar, Icon, Button } from '../../components';
import connect from '../../state/connect';
import theme from '../../configs/theme';
import icons from '../../assets/icons';
import HeadingScreen from '../../components/HeadingScreen';

const BoxStyle = styled.div`
  // margin: 0 ${theme.size.space * 2}px;
  // box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  // border-radius: 5px
  overflow: hidden;
  // border: 1px solid ${theme.color.border};
`;

const TitleStyle = styled.div`
  font-weight: 700;
  // padding: 0 ${theme.size.space * 2}px ${theme.size.space}px;
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
    font-family: ${theme.font.family.secondary};
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

      <div
        style={{
          minHeight: 150,
          paddingBottom: 30,
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
          borderBottom: `1px solid ${theme.color.border}`
        }}
      >
        <div style={{ marginBottom: 30 }}>
          <Avatar size={100} />
          <div>{user.displayName}</div>
        </div>
      </div>
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
