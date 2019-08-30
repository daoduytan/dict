import React from 'react';
import HeadingScreen from '../../components/HeadingScreen';
import { useWordsDone } from './useHooks';
import connect from '../../state/connect';
import { Loading, Layout } from '../../components';
import Word from '../Homepage/Word';
import theme from '../../configs/theme';

const WordsDone = ({ user }: { user: any }) => {
  const [loading, words] = useWordsDone(user);

  if (loading) return <Loading />;

  const width = `${(words.length / 3000) * 100}%`;

  return (
    <Layout>
      <HeadingScreen title="Words done" />

      <div style={{ padding: '10px 30px 20px' }}>
        <h2 style={{ lineHeight: 1.5 }}>I have been learned vocabulary</h2>

        <div
          style={{
            height: 50,
            background: theme.color.secondary,
            borderRadius: 10,
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <div
            style={{
              width,
              height: 50,
              background: theme.color.primary,
              position: 'absolute',
              left: 0
            }}
          ></div>
          <span
            style={{
              position: 'relative',
              zIndex: 10,
              fontSize: 20,
              fontWeight: 700,
              fontFamily: theme.font.family.secondary
            }}
          >{`${words.length}/3000`}</span>
        </div>
      </div>

      <div>
        {words.map((w, i) => (
          <Word
            key={w.word}
            word={{ ...w, number: i, type: 'month' }}
            type="month"
          />
        ))}
      </div>
    </Layout>
  );
};

const enhance = connect([{ values: ['user'], context: 'authContext' }]);

export default enhance(WordsDone);
