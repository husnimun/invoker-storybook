import styles from './LoadingBar.module.scss';
import React from 'react';
import cx from 'classnames';

const LoadingBar = ({ className, ...restProps }) => {
  return (
    <div
      className={cx({
        [styles.root]: true
      })}
      {...restProps}
    >
      <div className={styles.loader} />
    </div>
  );
};

export default LoadingBar;
