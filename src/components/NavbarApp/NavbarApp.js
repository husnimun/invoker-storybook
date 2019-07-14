import styles from './Navbar.module.scss';
import React from 'react';
import cx from 'classnames';

import { Wordmark as BrandLogo } from '../Brand/Brand'
import NavbarSecondary from '../NavbarSecondary/NavbarSecondary';
import NavbarPrimary from '../NavbarPrimary/NavbarPrimary';
import NavbarMenu from '../NavbarMenu/NavbarMenu';
import NavbarAvatar from '../NavbarAvatar/NavbarAvatar';
import Button from '../Button/Button';

const Navbar = ({ children, className, ...restProps }) => {
  return (
    <nav
      className={cx({
        [styles.root]: true,
        [className]: className
      })}
      {...restProps}
    >
      <NavbarPrimary>
        <Link to="/">
          <BrandLogo className={styles.brand}/>
        </Link>
        <NavbarMenu to="/about">About</NavbarMenu>
      </NavbarPrimary>
      <NavbarSecondary>
        <Button small primary style={{ marginRight: '24px' }}>
          Let's get lit!
        </Button>
        <NavbarAvatar
          src={
            'https://cdn-images-1.medium.com/max/2600/1*oBDMtanZ-TZl12cuR6CfFg.png'
          }
        />
      </NavbarSecondary>
    </nav>
  );
};

export default Navbar;
