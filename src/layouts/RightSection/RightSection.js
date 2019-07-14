import styles from './RightSection.module.scss';
import React from 'react';
import classnames from 'classnames';

const RightSection = ({ children, fixed, className, ...restProps }) => {
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

export default RightSection;
