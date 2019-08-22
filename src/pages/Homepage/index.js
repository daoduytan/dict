// @flow
import React, { memo } from 'react';
import Axios from 'axios';

import { Icon, Modal, Button } from '../../components';

import connect from '../../state/connect';

import { WordLine, Heading, Button as ButtonHome } from './style';
import icons from '../../assets/icons';
import FormChangeNumber from './FormChangeNumber';
import theme from '../../configs/theme';

type Props = {
  wordsToday: any,
  reload: Function,
  updateStatusWord: Function
};

const Homepage = ({ wordsToday, reload, updateStatusWord }: Props) => {
  return (
    <div style={{ padding: 0 }}>
      <Heading>
        <h2
          style={{
            fontSize: 20,
            fontWeight: 300
          }}
        >
          Words
        </h2>
        <div style={{ display: 'flex' }}>
          <Modal
            label={
              <ButtonHome>
                <Icon icon={icons.setting} size={15} />{' '}
              </ButtonHome>
            }
          >
            <FormChangeNumber />
          </Modal>

          <div style={{ marginLeft: 10 }} />

          <Modal
            label={
              <ButtonHome>
                <Icon icon={icons.reload} size={15} />
              </ButtonHome>
            }
          >
            <p
              style={{
                fontSize: 20,
                fontWeight: 700,
                fontFamily: theme.font.family.secondary
              }}
            >
              Are you sure reload list words?
            </p>
            <Button
              type="primary"
              onClick={reload}
              block
              role="presentation"
              size="large"
            >
              Reload
            </Button>
          </Modal>
        </div>
      </Heading>

      {wordsToday.map((w, i) => (
        <WordLine
          to={`/word/${w.word}`}
          key={w.word}
          style={{
            textDecoration: w.status ? 'line-through' : 'none',
            color: w.status ? theme.color.primary : theme.color.text
          }}
        >
          <span>{i + 1}.</span>
          {w.word}
        </WordLine>
      ))}
    </div>
  );
};

const select = [
  {
    values: ['wordsToday', 'reload', 'updateStatusWord'],
    context: 'wordContext'
  }
];

export default connect(select)(memo(Homepage));
