import React from 'react';
import { withRouter } from 'react-router-dom';

import { Icon } from '..';
import icons from '../../assets/icons';

type HeadingScreenProps = { title?: String, history: { goBack: Function } };

const HeadingScreen = ({ title, history }: HeadingScreenProps) => {
  const goBack = () => history.goBack();

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <div
        style={{
          height: 70,
          width: 60,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        onClick={goBack}
        role="presentation"
      >
        <Icon icon={icons.back} />
      </div>

      <div style={{ fontSize: 18, fontWeight: 600 }}>{title}</div>

      <div style={{ height: 50, width: 50 }}></div>
    </div>
  );
};

HeadingScreen.defaultProps = {
  title: 'Title'
};

export default withRouter(HeadingScreen);
