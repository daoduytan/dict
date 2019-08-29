// @flow
import React, { lazy, Suspense, useContext } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import { ProviderWordContext } from '../state/wordContext';
import { Loading } from '../components';
import authContext, { ProviderAuthContext } from '../state/authContext';
import { GuestRouter, UserRouter } from './authRouter';
import FooterBar from '../components/FooterBar';

// auth
const NotFound = lazy(() => import('../pages/NotFound'));
const Signup = lazy(() => import('../pages/Signup'));
const Homepage = lazy(() => import('../pages/Homepage'));
const Detail = lazy(() => import('../pages/Detail'));
const Login = lazy(() => import('../pages/Login'));
const Profile = lazy(() => import('../pages/Profile'));
const WordDone = lazy(() => import('../pages/WordsDone'));
const Start = lazy(() => import('../pages/Start'));

const RootRouter = () => {
  const { isAuth } = useContext(authContext);
  const paddingBottom = isAuth ? 60 : 0;
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div style={{ paddingBottom }}>
        <Switch>
          <UserRouter component={Start} exact path="/" />
          <UserRouter path="/sign-up" component={Signup} />
          <UserRouter path="/login" component={Login} />

          <GuestRouter component={Homepage} exact path="/main" />
          <GuestRouter component={Profile} exact path="/profile" />
          <GuestRouter component={Detail} exact path="/word/:w" />
          <GuestRouter component={WordDone} exact path="/words-done" />

          <Route component={NotFound} />
        </Switch>
        <FooterBar />
      </div>
    </Router>
  );
};

const AppRouter = () => {
  return (
    <ProviderAuthContext>
      <ProviderWordContext>
        <Suspense fallback={<Loading />}>
          <RootRouter />
        </Suspense>
      </ProviderWordContext>
    </ProviderAuthContext>
  );
};

export default AppRouter;
