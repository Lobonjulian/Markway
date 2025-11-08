import styles from '@styles/UI.module.css';

const Title = ({ level = 3, title, description, id, titleId, descriptionId, className = '' }) => {
  const sanitizedLevel = Math.min(6, Math.max(1, Number(level) || 3));
  const Tag = `h${sanitizedLevel}`;

  const headingId = titleId ?? (id ? `${id}-title` : undefined);
  const descId = descriptionId ?? (id ? `${id}-desc` : undefined);

  return (
    <div className={`${styles.container} ${className}`}>
      {title && (
        <Tag id={headingId} className={styles.title}>
          {title}
        </Tag>
      )}

      {description && (
        <p id={descId} className={styles.description}>
          {description}
        </p>
      )}
    </div>
  );
};

export default Title;
