// @flow
import React, { useRef } from 'react';
import { withRouter } from 'react-router-dom';
import Icon from '../Icon';
import Button from '../Button';
import icons from '../../assets/icons';

const Audio = ({ match, ...rest }: { match: any }) => {
  const ref = useRef();
  const { params } = match;
  const { w } = params;

  const onPlay = () => {
    ref.current.play();
  };

  const audio = `${process.env.PUBLIC_URL}/audio/${w}.mp3`;
  return (
    <div style={{ position: 'relative' }}>
      <span style={{ position: 'absolute', visibility: 'hidden' }}>
        <audio controls src={audio} ref={ref}>
          Your browser does not support the
          <track kind="captions"></track>
          <code>audio</code> element.
        </audio>
      </span>
      <Button onClick={onPlay} type="secondary">
        <Icon icon={icons.headphone} />
      </Button>
    </div>
  );
};

export default withRouter(Audio);
