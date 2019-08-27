// @flow
import React from 'react';

import connect from '../../state/connect';
import Word from './Word';
import NoWord from './NoWord';

type TabDayProps = { words_done: any };

const TabDay = ({ words_done }: TabDayProps) => {
  const wordsDay = words_done.filter(w => w.type === 'day');

  if (wordsDay.length === 0) return <NoWord />;

  return wordsDay.map((w, i) => (
    <Word key={w.word} word={{ ...w, number: i, type: 'day' }} type="day" />
  ));
};

const select = connect([
  {
    values: ['words_done'],
    context: 'wordContext'
  }
]);

export default select(TabDay);
