import React, { createContext, type Node } from 'react';

import { Loading } from '../components';
import { useAuth } from './useHooks';

const initialContext = {
  user: null,
  isAuth: false
};

const authContext = createContext(initialContext);

const { Provider } = authContext;

type ProviderAuthContextProps = { children: Node };

const ProviderAuthContext = ({ children }: ProviderAuthContextProps) => {
  const [loading, auth, setAuth] = useAuth();

  if (loading) return <Loading />;

  return <Provider value={{ ...auth, setAuth }}>{children}</Provider>;
};

export { ProviderAuthContext, authContext as default };
