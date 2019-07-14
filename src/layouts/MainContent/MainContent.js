import styles from './MainContent.module.scss';
import React from 'react';
import classnames from 'classnames';

const MainContent = ({ children, className, ...restProps }) => {
  return (
    <div
      {...restProps}
      className={classnames({
        [styles.root]: true,
        [className]: className
      })}
    >
      {children}
    </div>
  );
};

export default MainContent;
