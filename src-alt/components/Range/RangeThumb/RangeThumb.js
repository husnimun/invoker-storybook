import styles from './RangeThumb.module.scss';
import React from 'react';
import cx from 'classnames';

const RangeThumb = ({
  left,
  right,
  top,
  bottom,
  withAffordance,
  className,
  ...restProps
}) => {
  return (
    <div
      className={cx({
        [styles.root]: true,
        [className]: className
      })}
      {...restProps}
    >
      {withAffordance && (
        <>
          <div className={styles.affordance} />
          <div className={styles.affordance} />
          <div className={styles.affordance} />
        </>
      )}
    </div>
  );
};

export default RangeThumb;
