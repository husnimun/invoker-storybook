import styles from './RangeSlider.module.scss';
import React from 'react';
import cx from 'classnames';

const RangeSlider = ({
  step,
  name,
  min,
  max,
  value,
  id,
  className,
  getValue,
  ...restProps
}) => {
  const handleChange = e => {
    if (getValue) {
      getValue(e.target.value);
    }
  };

  return (
    <input
      id={id}
      type="range"
      name={name}
      className={cx({
        [styles.root]: true,
        [className]: className
      })}
      value={value}
      onChange={handleChange}
      min={min}
      max={max}
      step={step}
      {...restProps}
    />
  );
};

export default RangeSlider;
