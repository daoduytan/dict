// @flow
import React from 'react';

import connect from '../../state/connect';
import Word from './Word';
import NoWord from './NoWord';

type TabDayProps = { words_done: any };

const TabWeek = ({ words_done }: TabDayProps) => {
  const wordsWeek = words_done.filter(w => w.type === 'week');

  if (wordsWeek.length === 0) return <NoWord />;

  return wordsWeek.map((w, i) => (
    <Word key={w.word} word={{ ...w, number: i, type: 'week' }} type="week" />
  ));
};

const select = connect([
  {
    values: ['words_done'],
    context: 'wordContext'
  }
]);

export default select(TabWeek);
