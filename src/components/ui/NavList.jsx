import { NavLink as RouterNavLink } from 'react-router-dom';
import clsx from 'clsx';

import styles from '@styles/UI.module.css';

const NavList = ({ to, end = false, onClick, label }) => {
  return (
    <RouterNavLink
      to={to}
      end={end}
      onClick={onClick}
      className={({ isActive }) => clsx(styles.navLink, isActive && styles.navLinkActive)}
      aria-label={`Ir a ${label}`}
    >
      {label}
    </RouterNavLink>
  );
};

export default NavList;
