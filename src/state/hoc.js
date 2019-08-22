import React, { useContext } from 'react';

import rootReducers from './rootReducers';
import connect from './connect';

const withAuth = ({ value, reducers }) => Component => {
  return props => {
    let context = {};

    reducers.forEach(reducer => {
      const selectContext = useContext(rootReducers[reducer]);

      const s = connect(
        selectContext,
        value
      );

      context = { ...context, ...s };
    });

    return <Component {...props} {...context} />;
  };
};

export { withAuth };
