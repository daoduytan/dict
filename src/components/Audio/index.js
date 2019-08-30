// @flow
import React, { useRef } from 'react';
import { withRouter } from 'react-router-dom';

import Icon from '../Icon';
import Button from '../Button';
import icons from '../../assets/icons';

const Audio = ({ audio }: { audio: any }) => {
  const ref = useRef();

  const onPlay = () => {
    ref.current.play();
  };

  return (
    <div style={{ position: 'relative' }}>
      <span
        style={{
          position: 'absolute',
          visibility: 'hidden',
          height: 1,
          width: 1,
          overflow: 'hidden'
        }}
      >
        <audio controls src={audio} ref={ref}>
          Your browser does not support the
          <track kind="captions"></track>
          <code>audio</code> element.
        </audio>
      </span>

      <Button onClick={onPlay} type="secondary">
        <Icon icon={icons.sound} size={18} />
      </Button>
    </div>
  );
};

export default withRouter(Audio);
