import { FiMenu, FiX } from 'react-icons/fi';
import { useCallback } from 'react';
import clsx from 'clsx';

import styles from '@styles/Components.module.css';
import { forwardRef } from 'react';

const MobileToggle = forwardRef(
  ({ mobileOpen = false, onClick = () => {}, className = '' }, ref) => {
    const handleClick = useCallback(
      (e) => {
        onClick(e);
      },
      [onClick]
    );
    return (
      <button
        ref={ref}
        type="button"
        className={clsx(styles.hamburgerButton, className, mobileOpen && styles.open)}
        aria-controls="mobile-menu"
        aria-expanded={mobileOpen}
        aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
        onClick={handleClick}
      >
        {mobileOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
      </button>
    );
  }
);

MobileToggle.displayName = 'MobileToggle';

export default MobileToggle;
