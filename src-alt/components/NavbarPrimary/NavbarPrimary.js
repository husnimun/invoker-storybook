import styles from './NavbarPrimary.module.scss';
import React from 'react';
import cx from 'classnames';

const NavbarPrimary = ({ children, className, ...restProps }) => {
  return (
    <div
      className={cx({
        [styles.root]: true,
        [className]: className
      })}
      {...restProps}
    >
      {children}
    </div>
  );
};

export default NavbarPrimary;
