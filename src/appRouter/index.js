// @flow
import React, { lazy, Suspense } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import { ProviderWordContext } from '../state/wordContext';
import { Loading } from '../components';
import { ProviderAuthContext } from '../state/authContext';
import { GuestRouter, UserRouter } from './authRouter';

// auth
const NotFound = lazy(() => import('../pages/NotFound'));
const Signup = lazy(() => import('../pages/Signup'));
const Homepage = lazy(() => import('../pages/Homepage'));
const Detail = lazy(() => import('../pages/Detail'));
const Login = lazy(() => import('../pages/Login'));
const Profile = lazy(() => import('../pages/Profile'));

const AppRouter = () => {
  return (
    <ProviderAuthContext>
      <ProviderWordContext>
        <Suspense fallback={<Loading />}>
          <Router basename={process.env.PUBLIC_URL}>
            <Switch>
              <GuestRouter component={Homepage} exact path="/" />
              <GuestRouter component={Profile} exact path="/profile" />
              <GuestRouter component={Detail} exact path="/word/:w" />
              <UserRouter path="/sign-up" component={Signup} />
              <UserRouter path="/login" component={Login} />
              <Route component={NotFound} />
            </Switch>
          </Router>
        </Suspense>
      </ProviderWordContext>
    </ProviderAuthContext>
  );
};

export default AppRouter;
