import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Logo from '@components/ui/Logo';
import MobileMenu from './MobileMenu';
import MobileToggle from './MobileToggle';
import Nav from './Nav';
import PostButton from './PostButton';

import styles from '@styles/Components.module.css';

const headerItems = [
  { to: '/product', label: 'Producto' },
  { to: '/price', label: 'Precios' },
  { to: '/blog', label: 'Blog' },
  { to: '/library', label: 'Biblioteca' },
  { to: '/support', label: 'Soporte' },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const toggleRef = useRef(null);
  const firstMobileLinkRef = useRef(null);

  useEffect(() => {
    if (mobileOpen) setMobileOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const handleToggle = () => setMobileOpen((v) => !v);

  const handleMobileClose = () => setMobileOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__logo}>
          <Logo to="/" title="Markway" compact={false} />
        </div>

        <div className={styles.header__nav}>
          <Nav links={headerItems} />
        </div>

        <div className={styles.header__actions}>
          <PostButton />
        </div>

        <div className={styles.header__toggle}>
          <MobileToggle
            ref={toggleRef}
            mobileOpen={mobileOpen}
            onClick={handleToggle}
            aria-controls={'mobile-menu'}
            aria-expanded={mobileOpen}
          />
        </div>
      </div>

      <MobileMenu
        id={'mobile-menu'}
        isOpen={mobileOpen}
        onClose={() => {
          handleMobileClose();
          setTimeout(() => toggleRef.current?.focus?.(), 0);
        }}
        links={headerItems}
        firstLinkRef={firstMobileLinkRef}
      />
    </header>
  );
};

export default Header;
