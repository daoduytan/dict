import { useEffect, type Node } from 'react';

const Layout = ({ children }: { children: Node }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return children;
};

export default Layout;
