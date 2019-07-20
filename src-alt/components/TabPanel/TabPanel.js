import styles from './TabPanel.module.scss';
import React from 'react';
import classnames from 'classnames';

const TabPanel = ({ children, className, ...restProps }) => {
  return (
    <div
      className={classnames({
        [styles.root]: true,
        [className]: className
      })}
      {...restProps}
    >
      {children}
    </div>
  );
};

export default TabPanel;
