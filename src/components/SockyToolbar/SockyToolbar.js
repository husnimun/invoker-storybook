import styles from './SockyToolbar.module.scss';
import React from 'react';
import cx from 'classnames';

const SockyToolbar = ({ children, className, ...restProps }) => {
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

export default SockyToolbar;
