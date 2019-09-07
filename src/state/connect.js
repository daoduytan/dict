// @flow
import { forEach } from 'lodash/fp';
import React, { useContext } from 'react';
import rootContext from './rootContext';

const connect = select => Component => props => {
  let newProps = {};

  forEach(s => {
    if (s.context) {
      const { values, context } = s;

      const state = useContext(rootContext[context]);

      values.forEach(element => {
        newProps = { ...newProps, [element]: state[element] };
      });
    }
  }, select);

  const flatProps = { ...props, ...newProps };

  return <Component {...flatProps} />;
};

export default connect;
