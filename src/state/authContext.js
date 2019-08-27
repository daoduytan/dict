import React, { createContext, useEffect, type Node } from 'react';

import { Loading } from '../components';
import { useAuth } from './useHooks';
import { fireauth } from '../api';

const initialContext = {
  user: null,
  isAuth: false
};

const authContext = createContext(initialContext);

const { Provider } = authContext;

type ProviderAuthContextProps = { children: Node };

const ProviderAuthContext = ({ children }: ProviderAuthContextProps) => {
  const [loading, auth, setAuth] = useAuth();

  const logout = () => {
    setAuth({ user: null, auth: false });
    fireauth.signOut();
  };

  if (loading) return <Loading />;

  return <Provider value={{ ...auth, setAuth, logout }}>{children}</Provider>;
};

export { ProviderAuthContext, authContext as default };
