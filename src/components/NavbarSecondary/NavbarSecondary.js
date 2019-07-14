import styles from './NavbarSecondary.module.scss';
import React from 'react';
import cx from 'classnames';

const NavbarSecondary = ({ children, className, ...restProps }) => {
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

export default NavbarSecondary;
