import styles from './Sidebar.module.scss';
import React from 'react';
import classnames from 'classnames';

const Sidebar = ({ children, className, ...restProps }) => {
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

export default Sidebar;
