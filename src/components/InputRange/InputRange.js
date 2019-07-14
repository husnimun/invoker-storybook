import styles from './InputRange.module.scss';
import React from 'react';
import cx from 'classnames';

import RangeCore from '../Range/RangeCore/RangeCore';

/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import RangeThumb from '../Range/RangeThumb/RangeThumb';
import RangeRail from '../Range/RangeRail/RangeRail';

const InputRange = ({
  children,
  getValue,
  affordance,
  dark,
  light,
  unit,
  min,
  horizontal,
  vertical,
  max,
  value,
  maxValue,
  step,
  className,
  ...restProps
}) => {
  let [val, setVal] = React.useState(value);
  let [offset, setOffset] = React.useState(
    `${100 - ((val - min) / max) * 100}`
  );

  const styleProgress = css`
    transform: translate3d(-${offset}%, 0px, 0px);
  `;

  const styleThumb = css`
    left: calc(${100 - offset}% - 14px);
  `;

  const handleChange = val => {
    setVal(val);
    if (getValue) {
      getValue(val);
    }
    setOffset(`${100 - ((val - min) / max) * 100}`);
  };

  return (
    <RangeCore
      percent
      onChange={newVal => handleChange(newVal)}
      value={val}
      rate={step}
      min={min}
      max={max}
      className={cx({
        [styles.root]: true,
        [className]: className
      })}
      {...restProps}
    >
      <RangeThumb withAffordance={affordance} css={styleThumb} />
      <RangeRail bgRail className={styles.progressContainer}>
        <RangeRail css={styleProgress} className={cx(styles.progress)} />
      </RangeRail>
    </RangeCore>
  );
};

export default InputRange;
