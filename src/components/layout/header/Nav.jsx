import NavList from '@components/ui/NavList';

import styles from '@styles/Layouts.module.css';

const Nav = ({ links = [], orientation = 'horizontal' }) => {
  return (
    <nav className={styles.nav} aria-label="Navegación Principal" data-orientation={orientation}>
      <ul className={orientation === 'horizontal' ? styles.navList : styles.navListVertical}>
        {links.map((link) => (
          <li key={link.id ?? link.to} className={styles.navItem}>
            <NavList to={link.to} label={link.label} end={link.end} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
