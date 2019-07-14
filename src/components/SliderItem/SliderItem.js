import styles from './SliderItem.module.scss';
import React, { useContext } from 'react';
import cx from 'classnames';
import { SliderContext } from '../__context';

const SliderItem = ({ children, className, ...restProps }) => {
  let { ref } = useContext(SliderContext);
  return (
    <div
      ref={ref}
      className={cx({
        [styles.root]: true,
        [className]: className,
      })}
      {...restProps}
    >
      {children}
    </div>
  );
};

export default SliderItem;
