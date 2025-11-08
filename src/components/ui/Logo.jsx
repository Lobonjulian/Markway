import { Link } from 'react-router-dom';

import styles from '@styles/UI.module.css';

const Logo = ({
  to = '/',
  compact = false,
  title = 'Markway',
  imgSrc = '/markway.svg',
  alt,
  width = 80,
  height = 'auto',
  className = '',
  ...rest
}) => {
  const computedAlt = typeof alt === 'string' ? alt : compact ? title || 'Markway' : '';

  const imgAriaHidden = computedAlt === '' ? true : undefined;

  const imgAttrs = {};
  if (width !== undefined && width !== null) imgAttrs.width = width;
  if (height !== undefined && height !== null) imgAttrs.height = height;

  return (
    <Link
      to={to}
      className={`${styles.row} ${className}`}
      aria-label={`Ir a la página principal`}
      {...rest}
    >
      <img
        src={imgSrc}
        alt={computedAlt}
        className={styles.logo__img}
        aria-hidden={imgAriaHidden}
        loading="eager"
        decoding="async"
        {...imgAttrs}
      />

      {!compact && title && (
        <span className={styles.logo__text} aria-hidden={false}>
          {title}
        </span>
      )}
    </Link>
  );
};

export default Logo;
