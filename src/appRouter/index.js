// @flow
import React, { lazy, Suspense } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import { ProviderWordContext } from '../state/wordContext';
import { Loading } from '../components';
import { ProviderAuthContext } from '../state/authContext';
import { GuestRouter, UserRouter } from './authRouter';

// auth
const Signup = lazy(() => import('../pages/Signup'));
const Homepage = lazy(() => import('../pages/Homepage'));
const Detail = lazy(() => import('../pages/Detail'));
const Login = lazy(() => import('../pages/Login'));

const AppRouter = () => {
  return (
    <ProviderAuthContext>
      <ProviderWordContext>
        <Suspense fallback={<Loading />}>
          <Router basename={process.env.PUBLIC_URL}>
            <GuestRouter component={Homepage} exact path="/" />
            <GuestRouter component={Detail} exact path="/word/:w" />
            <UserRouter path="/sign-up" component={Signup} />
            <Route path="/login" component={Login} />
          </Router>
        </Suspense>
      </ProviderWordContext>
    </ProviderAuthContext>
  );
};

export default AppRouter;
