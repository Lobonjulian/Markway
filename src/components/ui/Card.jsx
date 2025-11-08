import Title from './Title';

import styles from '@styles/UI.module.css';

const Card = ({ id, title, image, description, className = '', children }) => {
  const baseId = id ?? `card-${Math.random().toString(36).slice(2, 8)}`;

  const titleId = `${baseId}-title`;
  const descId = description ? `${baseId}-desc` : undefined;

  return (
    <article
      id={baseId}
      className={`${styles.card} ${className}`}
      role="article"
      aria-labelledby={titleId}
      aria-describedby={descId}
    >
      {image && (
        <img
          src={image}
          alt={title ?? 'Imagen del recurso'}
          className={styles.cardImage}
          loading="lazy"
          decoding="async"
        />
      )}

      {title && <Title id={baseId} title={title} description={description} />}
      {children && <div className={styles.cardFooter}>{children}</div>}
    </article>
  );
};

export default Card;
