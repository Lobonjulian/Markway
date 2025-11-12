import Icon from '@components/ui/Icon';
import {
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaPinterest,
  FaReddit,
} from 'react-icons/fa';

import styles from '@styles/Layouts.module.css';
import clsx from 'clsx';

const socialLinks = [
  { href: 'https://twitter.com', label: 'Twitter', icon: FaTwitter },
  { href: 'https://facebook.co', label: 'Facebook', icon: FaFacebook },
  { href: 'https://linkedin.com', label: 'LinkedIn', icon: FaLinkedin },
  { href: 'https://instagram.com', label: 'Instagram', icon: FaInstagram },
  { href: 'https://youtube.com', label: 'YouTube', icon: FaYoutube },
  { href: 'https://pinterest.com', label: 'Pinterest', icon: FaPinterest },
  { href: 'https://reddit.com', label: 'GitHub', icon: FaReddit },
];

const FooterSocial = () => {
  const date = new Date().getFullYear();

  return (
    <section className={clsx(styles.container, styles.footerSocial)}>
      <div className={styles.social}>
        {socialLinks.map(({ href, label, icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={styles.socialLink}
          >
            <Icon icon={icon} name={label} title={label} size={25} className={styles.icon} />
          </a>
        ))}
      </div>
      <div className={styles.copyright}>MARKWAY,&copy; COPYRIGHT - {date}</div>
    </section>
  );
};

export default FooterSocial;
