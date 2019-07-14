import styles from './Combobox.module.scss';
import React from 'react';
import cx from 'classnames';

const Combobox = ({ children, innerRef, className, ...restProps }) => {
  return (
    <div
      ref={innerRef}
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

export default Combobox;
