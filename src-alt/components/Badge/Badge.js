import styles from './Badge.module.scss';
import React from 'react';
import cx from 'classnames';

const Badge = ({
  children,
  primary,
  small,
  large,
  circle,
  secondary,
  component,
  className,
  ...restProps
}) => {
  let Component = component || 'span';
  return (
    <Component
      className={cx({
        [styles.root]: true,
        [styles.primary]: primary || !secondary,
        [styles.small]: small || !large,
        [styles.large]: large,
        [styles.secondary]: secondary,
        [styles.circle]: circle,
        [className]: className
      })}
      {...restProps}
    >
      {children && <span className={styles.text}>{children}</span>}
    </Component>
  );
};

export default Badge;
