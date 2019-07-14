import styles from './Toast.module.scss';
import React from 'react';
import classnames from 'classnames';

const Toast = ({ className, children, ...restProps }) => {
  return (
    <div className={styles.container}>
      <div
        className={classnames({
          [styles.root]: true,
          [className]: className
        })}
        {...restProps}
      >
        <div className={styles.toast}>{children}</div>
      </div>
    </div>
  );
};

export default Toast;
