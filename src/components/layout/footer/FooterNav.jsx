import NavList from '@/components/ui/NavList';

import clsx from 'clsx';
import styles from '@styles/Layouts.module.css';

const FooterNav = ({ sections = [] }) => {
  if (!sections.length) return null;

  return (
    <nav
      className={clsx(styles.footerNav, styles.container)}
      aria-label="Enlaces del pie de página"
    >
      {sections.map((section) => (
        <div key={section.title} className={styles.footer__nav}>
          <h4 className={styles.footerNav__title}>{section.title}</h4>
          <ul className={styles.footer__list}>
            {section.items.map((item) => (
              <li key={item.to} className={styles.footer__item}>
                <NavList to={item.to} label={item.label} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
};

export default FooterNav;
