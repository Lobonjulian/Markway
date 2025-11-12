import FooterNav from './FooterNav';
import FooterBrand from './FooterBrand';
import FooterSocial from './FooterSocial';
import styles from '@styles/Layouts.module.css';

const footerLinks = [
  {
    title: 'Producto',
    items: [
      { label: 'Funciones', to: '/features' },
      { label: 'Precios', to: '/pricing' },
      { label: 'Integraciones', to: '/integrations' },
    ],
  },
  {
    title: 'Recursos',
    items: [
      { label: 'Blog', to: '/blog' },
      { label: 'Documentación', to: '/docs' },
      { label: 'API', to: '/api' },
    ],
  },
  {
    title: 'Compañía',
    items: [
      { label: 'Nosotros', to: '/about' },
      { label: 'Carreras', to: '/careers' },
      { label: 'Contacto', to: '/contact' },
    ],
  },
  {
    title: 'Legal',
    items: [
      { label: 'Términos', to: '/terms' },
      { label: 'Privacidad', to: '/privacy' },
      { label: 'Cookies', to: '/cookies' },
    ],
  },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.containerCol}>
        <FooterBrand />
        <FooterNav sections={footerLinks} />
        <FooterSocial />
      </div>
    </footer>
  );
};

export default Footer;
