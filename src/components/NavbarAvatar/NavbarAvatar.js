import styles from './NavbarAvatar.module.scss';
import React from 'react';
import cx from 'classnames';
import Link from '../Link/Link'

import Image from '../Image/Image';
import Popout from '../Popout/Popout';
// import Divider from '../Divider/Divider';
import Text from '../Text/Text';

const Content = ({ setVisible, visible }) => (
  <ul className={styles.menuContainer}>
    <Link
      to="/sandbox"
      className={styles.link}
      onClick={() => setVisible(!visible)}
    >
      <li className={styles.menu}>
        <Text small className={styles.menuText}>
          Profile
        </Text>
      </li>
    </Link>
    <Link
      to="/sandbox"
      className={styles.link}
      onClick={() => setVisible(!visible)}
    >
      <li className={styles.menu}>
        <Text small className={styles.menuText}>
          Settings
        </Text>
      </li>
    </Link>
    <Link
      to="/sandbox"
      className={styles.link}
      onClick={() => setVisible(!visible)}
    >
      <li className={styles.menu}>
        <Text small className={styles.menuText}>
          Transactions history
        </Text>
      </li>
    </Link>
    <Link
      to="/sandbox"
      className={styles.link}
      onClick={() => setVisible(!visible)}
    >
      <li className={styles.menu}>
        <Text small className={styles.menuText}>
          Your guidebook
        </Text>
      </li>
    </Link>
    <div className={styles.link}>
      {/* <Divider className={styles.divider} small /> */}
    </div>
    <Link
      to="/sandbox"
      className={styles.link}
      onClick={() => setVisible(!visible)}
    >
      <li className={styles.menu}>
        <Text small className={styles.menuText}>
          Community center
        </Text>
      </li>
    </Link>
    <Link
      to="/sandbox"
      className={styles.link}
      onClick={() => setVisible(!visible)}
    >
      <li className={styles.menu}>
        <Text small className={styles.menuText}>
          Host assist
        </Text>
      </li>
    </Link>
    <div className={styles.link}>
      {/* <Divider className={styles.divider} small /> */}
    </div>
    <Link
      to="/sandbox"
      className={styles.link}
      onClick={() => setVisible(!visible)}
    >
      <li className={styles.menu}>
        <Text small className={styles.menuText}>
          Add new listing
        </Text>
      </li>
    </Link>
    <Link
      to="/sandbox"
      className={styles.link}
      onClick={() => setVisible(!visible)}
    >
      <li className={styles.menu}>
        <Text small className={styles.menuText}>
          Refer host
        </Text>
      </li>
    </Link>
    <Link
      to="/sandbox"
      className={styles.link}
      onClick={() => setVisible(!visible)}
    >
      <li className={styles.menu}>
        <Text small className={styles.menuText}>
          Host an experience
        </Text>
      </li>
    </Link>
    <div className={styles.link}>
      {/* <Divider className={styles.divider} small /> */}
    </div>
    <Link
      to="/sandbox"
      className={styles.link}
      onClick={() => setVisible(!visible)}
    >
      <li className={styles.menu}>
        <Text small className={styles.menuText}>
          Switch to travelling
        </Text>
      </li>
    </Link>
    <Link
      to="/sandbox"
      className={styles.link}
      onClick={() => setVisible(!visible)}
    >
      <li className={styles.menu}>
        <Text small className={styles.menuText}>
          Log out
        </Text>
      </li>
    </Link>
  </ul>
);

const NavbarAvatar = ({ children, src, className, ...restProps }) => {
  return (
    <Popout
      withArrow={false}
      bottomRight
      content={(setVisible, visible) => (
        <Content setVisible={setVisible} visible={visible} />
      )}
      containerClassName={styles.popout}
      contentClassName={styles.content}
    >
      {(setVisible, visible) => (
        <div
          onClick={() => setVisible(!visible)}
          className={cx({
            [styles.root]: true,
            [className]: className
          })}
          {...restProps}
        >
          <div className={styles.container}>
            <Image src={src} fit="cover" className={styles.picture} />
          </div>
        </div>
      )}
    </Popout>
  );
};

export default NavbarAvatar;
