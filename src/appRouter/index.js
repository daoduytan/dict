// @flow
import React, { lazy, Suspense } from 'react';
import { Router } from '@reach/router';

import { ProviderWordContext } from '../state/wordContext';
import { Navigation } from '../components';

const Homepage = lazy(() => import('../pages/Homepage'));

const AppRouter = () => {
  return (
    <ProviderWordContext>
      <Suspense fallback={<div>loading</div>}>
        <Router>
          <Homepage path="/" />
        </Router>
      </Suspense>
    </ProviderWordContext>
  );
};

export default AppRouter;
