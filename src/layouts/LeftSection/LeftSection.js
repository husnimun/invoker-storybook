import styles from './LeftSection.module.scss';
import React from 'react';
import classnames from 'classnames';

const LeftSection = ({ children, fixed, className, ...restProps }) => {
  return (
    <div
      {...restProps}
      className={classnames({
        [styles.root]: true,
        [styles.fixed]: fixed,
        [className]: className
      })}
    >
      {children}
    </div>
  );
};

export default LeftSection;
