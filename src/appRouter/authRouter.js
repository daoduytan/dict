// @flow
import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';

import authContext from '../state/authContext';

type RouterProps = {
  component: Node
};

const GuestRouter = ({ component: Component, ...rest }: RouterProps) => {
  const { isAuth } = useContext(authContext);

  return (
    <Route
      {...rest}
      render={props => {
        if (!isAuth)
          return (
            <Redirect
              to={{
                pathname: '/login'
              }}
            />
          );

        return <Component {...props} />;
      }}
    />
  );
};

const UserRouter = ({ component: Component, ...rest }: RouterProps) => {
  const { isAuth } = useContext(authContext);

  return (
    <Route
      {...rest}
      render={props => {
        if (isAuth)
          return (
            <Redirect
              to={{
                pathname: '/'
              }}
            />
          );

        return <Component {...props} />;
      }}
    />
  );
};

export { GuestRouter, UserRouter };
