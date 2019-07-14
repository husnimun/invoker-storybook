import styles from './Dialog.module.scss';
import React from 'react';
import cx from 'classnames';

const Dialog = ({
  children,
  light,
  dark,
  hidden,
  scroll,
  className,
  ...restProps
}) => {
  return (
    <div
      className={cx({
        [styles.root]: true,
        [styles.light]: light || !dark,
        [styles.hidden]: hidden,
        [styles.scroll]: scroll || !hidden,
        [styles.dark]: dark
      })}
      {...restProps}
    >
      {children}
    </div>
  );
};

export default Dialog;
