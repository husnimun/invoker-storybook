import styles from './IconButton.module.scss';
import React from 'react';
import cx from 'classnames';

const IconButton = ({
  children,
  type,
  a11yLabel,
  primary,
  primaryAlt,
  secondary,
  secondaryAlt,
  transparentLight,
  transparentDark,
  small,
  large,
  className,
  disabled,
  ...restProps
}) => {
  return (
    <button
      type={type || 'button'}
      aria-label={a11yLabel}
      className={cx({
        [styles.root]: true,

        [styles.primary]: primary,
        [styles.primaryAlt]: primaryAlt,
        [styles.secondary]: secondary,
        [styles.secondaryAlt]: secondaryAlt,
        [styles.transparentLight]: transparentLight,
        [styles.transparentDark]: transparentDark,

        [styles.small]: small || !large,
        [styles.large]: large,
        [className]: className
      })}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default IconButton;
