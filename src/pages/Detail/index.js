import React, { useEffect, useState } from 'react';
import { find } from 'lodash/fp';

import {
  Icon,
  Loading,
  Button,
  Layout,
  HeadingScreen,
  Audio
} from '../../components';
import icons from '../../assets/icons';

import {
  DetailWrap,
  DetailContent,
  CardStyle,
  CarTitleStyle,
  CardTitleSubStyle,
  NumberStyle,
  Title,
  GroupAudio
} from './style';
import theme from '../../configs/theme';
import connect from '../../state/connect';
import { getDetailWord } from '../../api/api_word';

type DetailProps = {
  match: {
    params: {
      w: String
    }
  },
  wordsToday: any,
  updateStatusWord: Function
};

const Detail = ({ match, updateStatusWord, wordsToday }: DetailProps) => {
  const { params } = match;
  const [loading, setLoading] = useState(true);

  const [data, setData] = useState(null);

  useEffect(() => {
    const loadDetailtWord = async () => {
      const word = await getDetailWord(params.w);
      setData(word);
      setLoading(false);
    };

    loadDetailtWord();
  }, [params.w]);

  if (loading) return <Loading />;

  const isDone = () => {
    const word = find(
      w => w.word === params.w && w.status === true,
      wordsToday
    );
    if (!word) return false;
    return true;
  };

  const checkWord = () => {
    const word = find(w => w.word === params.w, wordsToday);
    if (!word) {
      return false;
    }

    if (word.type && word.type !== 'today') {
      return false;
    }

    return true;
  };

  const renderContent = () => {
    if (!data) return null;
    return (
      <>
        <GroupAudio>
          <div className="item">
            <span style={{ marginRight: 5 }}>ENG:</span>{' '}
            <Audio audio={data.sounds[0]} />
          </div>
          <div className="item" style={{ marginLeft: 20 }}>
            <span style={{ marginRight: 5 }}>USA:</span>{' '}
            <Audio audio={data.sounds[1]} />
          </div>
        </GroupAudio>

        <DetailContent>
          {data.data.map(d => {
            return (
              <CardStyle key={d.pron}>
                <CarTitleStyle>{d.title}</CarTitleStyle>
                <CardTitleSubStyle>
                  {d.posgram.map(p => (
                    <span key={p}>{p}</span>
                  ))}

                  <span style={{ marginLeft: 10 }}>{d.pron}</span>
                </CardTitleSubStyle>
                {d.content.map((c, l) => (
                  <div
                    key={c.def}
                    style={{ margin: '15px 0', display: 'flex' }}
                  >
                    <NumberStyle>{l + 1}</NumberStyle>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 700, lineHeight: 1.3 }}>
                        {c.def}
                      </div>
                      <div
                        style={{
                          margin: '10px 0',
                          color: theme.color.primary,
                          fontWeight: 700
                        }}
                      >
                        {c.trans}
                      </div>
                      <div>
                        <b style={{ margin: '15px 0', display: 'block' }}>
                          <small>Example:</small>
                        </b>
                        {c.examp.map((ex, i) => (
                          <div style={{ marginBottom: 10 }} key={ex}>
                            {`${i + 1}. ${ex}`}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </CardStyle>
            );
          })}
        </DetailContent>
      </>
    );
  };

  const renderDetail = () => {
    return (
      <>
        {renderContent()}

        {checkWord() && (
          <DetailContent>
            <Button
              type="primary"
              block
              size="large"
              onClick={() => updateStatusWord(params.w)}
            >
              {isDone() ? <Icon icon={icons.check} color="#fff" /> : 'Done'}
            </Button>
          </DetailContent>
        )}
      </>
    );
  };

  return (
    <Layout>
      <HeadingScreen title="" />

      <DetailWrap>
        {params.w && <Title>{params.w}</Title>}

        {renderDetail()}
      </DetailWrap>
    </Layout>
  );
};

const select = [
  {
    values: ['wordsToday', 'updateStatusWord'],
    context: 'wordContext'
  }
];

export default connect(select)(Detail);
