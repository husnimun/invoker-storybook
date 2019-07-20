import styles from './RangeRail.module.scss';
import React from 'react';
import cx from 'classnames';

const RangeRail = ({
  children,
  bgRail,
  transparent,
  light,
  dark,
  left,
  right,
  className,
  ...restProps
}) => {
  return (
    <div
      className={cx({
        [styles.root]: true,
        [styles.transparent]: transparent,
        [styles.light]: (light || !dark) && !bgRail && !transparent,
        [styles.lightBackground]: (light || !dark) && bgRail,
        [styles.dark]: dark && !bgRail && !transparent,
        [styles.darkBackground]: dark && bgRail,
        [className]: className
      })}
      {...restProps}
    >
      {children}
    </div>
  );
};

export default RangeRail;
