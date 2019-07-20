import styles from './OverlappingItem.module.scss';
import React, { useContext } from 'react';
import cx from 'classnames';
import { OverlappingContext } from '../__context';

const OverlappingItem = ({
  index,
  item,
  children,
  className,
  ...restProps
}) => {
  const {
    clippingIndex,
    activeIndex,
    translateIndex,
    fromLeft,
    fromRight,
  } = useContext(OverlappingContext);

  return (
    <div
      id={item.id || index}
      className={cx({
        [styles.root]: true,
        [styles.shown]: clippingIndex === index || activeIndex === index,
        [styles.clipping]: clippingIndex === index,
        [styles.fromLeft]: clippingIndex === index && fromLeft,
        [styles.fromRight]: clippingIndex === index && fromRight,
        [styles.next]: translateIndex === index,
        [styles.translateLeft]: activeIndex === index && fromLeft,
        [styles.translateRight]: activeIndex === index && fromRight,
        [className]: className,
      })}
      {...restProps}
    >
      {children}
    </div>
  );
};

export default OverlappingItem;
