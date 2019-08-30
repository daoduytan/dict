// @flow
import React, { useRef, useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Icon from '../Icon';
import Button from '../Button';
import icons from '../../assets/icons';
import theme from '../../configs/theme';

const Audio = ({ match }: { match: any }) => {
  const [hasSound, setHasSound] = useState(false);

  const ref = useRef();
  const { params } = match;
  const { w } = params;

  const audio = `${process.env.PUBLIC_URL}/audio/${w}.mp3`;

  useEffect(() => {
    fetch(audio)
      .then(res => {
        if (res.status === 404) {
          return setHasSound(false);
        }
        console.log('res', res);
        return setHasSound(true);
      })
      .catch(() => setHasSound(false));
  }, [audio, hasSound, w]);

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

      <Button
        onClick={onPlay}
        type={hasSound ? 'secondary' : null}
        disabled={!hasSound}
      >
        <Icon icon={icons.sound} color={hasSound ? theme.color.text : '#fff'} />
      </Button>
    </div>
  );
};

export default withRouter(Audio);
