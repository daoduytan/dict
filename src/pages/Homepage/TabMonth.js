// @flow
import React from 'react';

import connect from '../../state/connect';
import Word from './Word';
import NoWord from './NoWord';

type TabDayProps = { words_done: any };

const TabMonth = ({ words_done }: TabDayProps) => {
  const wordsMonth = words_done.filter(w => w.type === 'month');

  if (wordsMonth.length === 0) return <NoWord />;

  return wordsMonth.map((w, i) => (
    <Word key={w.word} word={{ ...w, number: i, type: 'month' }} type="month" />
  ));
};

const select = connect([
  {
    values: ['words_done'],
    context: 'wordContext'
  }
]);

export default select(TabMonth);
