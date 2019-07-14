import styles from './SliderContainer.module.scss';
import React, { useContext } from 'react';
import cx from 'classnames';
import { SliderContext } from '../__context';

const SliderContainer = ({ children, className, ...restProps }) => {
  let context = useContext(SliderContext);
  let translateStyle = {
    transform: `translateX(-${context.activeIndex * context.width}px)`,
  };

  return (
    <div
      className={cx({
        [styles.root]: true,
      })}
    >
      <div
        className={cx({
          [styles.wrapper]: true,
          [className]: className,
        })}
        style={{
          ...translateStyle,
        }}
        {...restProps}
      >
        {children(context)}
      </div>
    </div>
  );
};

export default SliderContainer;
