import { useState, useEffect } from 'react';
import { fireauth } from '../api';

const useAuth = () => {
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useState({
    user: null,
    isAuth: false
  });

  useEffect(() => {
    setLoading(true);
    fireauth.onAuthStateChanged(user => {
      if (user) {
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

export { useAuth };
