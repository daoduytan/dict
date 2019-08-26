import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Avatar, Icon } from '../../components';
import connect from '../../state/connect';
import theme from '../../configs/theme';
import icons from '../../assets/icons';

const BoxStyle = styled.div`
  margin: 0 ${theme.size.space * 2}px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden;
  border: 1px solid ${theme.color.border};
`;

const TitleStyle = styled.div`
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 600;
  color: #999;
  padding: 0 ${theme.size.space * 2}px ${theme.size.space}px;
`;

const RowLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${theme.color.border};
  padding: ${theme.size.space}px;

  .label {
    text-transform: uppercase;
    color: #999;
    font-size: 12px;
    font-weight: 600;
  }
`;

type ProfileProps = {
  user: {
    displayName: String
  }
};

const Profile = ({ user }: ProfileProps) => {
  return (
    <>
      <Link to="/">
        <div style={{ padding: '20px 30px', display: 'inline-block' }}>
          <Icon icon={icons.back} />
        </div>
      </Link>

      <div
        style={{
          height: 120,
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <Avatar size={70} />
        <div>{user.displayName}</div>
      </div>
      <div>
        <TitleStyle>Profile</TitleStyle>

        <BoxStyle>
          <RowLine>
            <span className="label">Display name</span>
            <span>{user.displayName}</span>
          </RowLine>

          <RowLine>
            <span className="label">Email</span>
            <span>{user.email}</span>
          </RowLine>
        </BoxStyle>

        <div style={{ marginTop: 50 }}></div>

        <TitleStyle>Setting</TitleStyle>

        <BoxStyle>
          <RowLine>
            <span className="label">Number word</span>
            <span>10</span>
          </RowLine>
        </BoxStyle>
      </div>
    </>
  );
};

const select = [{ values: ['user'], context: 'authContext' }];

export default connect(select)(Profile);
