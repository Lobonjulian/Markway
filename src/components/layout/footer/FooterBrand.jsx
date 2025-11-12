import Logo from '@/components/ui/Logo';
import clsx from 'clsx';

import styles from '@styles/Layouts.module.css';

const FooterBrand = () => {
  return (
    <section
      className={clsx(styles.footer__brandContent, styles.container)}
      aria-labelledby="footer.brand-title"
    >
      <p className={styles.brand__description}>Creado con pasión por JulitoMuxik.inc</p>
      <Logo compact />
    </section>
  );
};

export default FooterBrand;
