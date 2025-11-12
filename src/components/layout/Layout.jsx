import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Footer from './footer/Footer';
import Header from './header/Header';

import styles from '@styles/Layouts.module.css';

const Layout = ({ children, headerProps = {}, footerProps = {} }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location.pathname]);

  return (
    <div>
      <Header {...headerProps} />
      <div className={styles.pageWrap}>
        <main id="content" className={styles.main}>
          {children ?? <Outlet />}
        </main>
      </div>

      <Footer {...footerProps} />
    </div>
  );
};

export default Layout;
