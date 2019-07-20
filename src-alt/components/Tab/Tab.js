import styles from './Tab.module.scss';
import React from 'react';
import classnames from 'classnames';

const Tab = ({
  children,
  className,
  isActive,
  isDisabled,
  onSelect,
  ...restProps
}) => {
  return (
    <div
      className={classnames({
        [styles.root]: true,
        [styles.active]: isActive && !isDisabled,
        [styles.disabled]: isDisabled,
        [className]: className
      })}
      onClick={isDisabled ? null : onSelect}
      {...restProps}
    >
      {children}
    </div>
  );
};

export default Tab;
