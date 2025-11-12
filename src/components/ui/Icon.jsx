import clsx from 'clsx';
import styles from '@styles/UI.module.css';

const Icon = ({
  icon: IconComponent,
  name,
  size = 20,
  color = 'currentColor',
  className = '',
  title = '',
  ...rest
}) => {
  if (!IconComponent || typeof IconComponent !== 'function') {
    console.error('se debe proporcionar un componente de icono válido');
    return null;
  }

  return (
    <span
      className={clsx(styles.iconWrapper, className)}
      title={title}
      role="img"
      aria-label={title || name}
    >
      <IconComponent size={size} color={color} {...rest} />
    </span>
  );
};

export default Icon;
