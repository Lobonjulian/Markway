import { forwardRef } from 'react';
import clsx from 'clsx';

import styles from '@styles/UI.module.css';

const Button = forwardRef(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      as: Component = 'button',
      className,
      disabled,
      type = 'button',
      ...rest
    },
    ref
  ) => {
    const isButton = Component === 'button';

    const classNames = clsx(styles.btn, styles[variant], styles[`size_${size}`], className);

    const elementProps = isButton
      ? {
          type,
          disabled,
          ref,
          className: classNames,
          ...rest,
        }
      : {
          ref,
          className: classNames,
          'arial-disabled': disabled ? 'true' : undefined,
          tabIndex: disabled ? -1 : rest.tabIndex,
          ...rest,
        };
    return <Component {...elementProps}>{children}</Component>;
  }
);

Button.displayName = 'Button';

export default Button;
