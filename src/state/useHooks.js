import { useState, useEffect } from 'react';
import { pick } from 'lodash/fp';
import { fireauth } from '../api';

const useAuth = () => {
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useState({
    user: null,
    isAuth: false
  });

  useEffect(() => {
    setLoading(true);
    fireauth.onAuthStateChanged(res => {
      if (res) {
        const user = pick(
          ['displayName', 'phoneNumber', 'email', 'photoURL', 'uid'],
          res
        );
        setAuth({
          user,
          isAuth: true
        });
        setLoading(false);
      } else {
        setLoading(false);
      }
    });
  }, []);

  return [loading, auth, setAuth];
};

// eslint-disable-next-line
export { useAuth };
