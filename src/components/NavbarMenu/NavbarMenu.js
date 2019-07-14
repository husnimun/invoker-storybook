import styles from './NavbarMenu.module.scss';
import React from 'react';
import cx from 'classnames';

import NavLink from '../NavLink/NavLink'
import Text from '../Text/Text';

const NavbarMenu = ({
  children,
  to,
  containerClassName,
  className,
  activeClassName,
  ...restProps
}) => {
  return (
    <div
      className={cx({
        [styles.root]: true,
        [containerClassName]: containerClassName
      })}
    >
      <NavLink
        to={to}
        className={cx({
          [styles.menu]: true,
          [className]: className
        })}
        activeClassName={cx({
          [styles.active]: true,
          [activeClassName]: activeClassName
        })}
        {...restProps}
      >
        <Text heading6 className={styles.item}>
          {children}
        </Text>
      </NavLink>
    </div>
  );
};

export default NavbarMenu;
