import styles from './InputRangeDouble.module.scss';
import React from 'react';
import cx from 'classnames';

import RangeCore from '../Range/RangeCore/RangeCore';

/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import RangeThumb from '../Range/RangeThumb/RangeThumb';
import RangeRail from '../Range/RangeRail/RangeRail';

const InputRangeDouble = ({
  children,
  percent,
  getValue,
  affordance,
  dark,
  light,
  unit,
  min,
  max,
  minValue,
  maxValue,
  horizontal,
  vertical,
  step,
  className,
  ...restProps
}) => {
  let [minVal, setMinVal] = React.useState(minValue);
  let [maxVal, setMaxVal] = React.useState(maxValue);

  let [offset, setOffset] = React.useState(
    `${100 - ((minVal - min) / max) * 100}`
  );
  let [offsetRight, setOffsetRight] = React.useState(
    `${100 - ((maxVal - min) / max) * 100}`
  );

  const styleProgress = css`
    left: calc(${100 - offset}% - 14px);
    right: calc(${offsetRight}% - 14px);
  `;

  const styleThumb = css`
    left: calc(${100 - offset}% - 14px);
  `;

  const styleThumbRight = css`
    left: calc(${100 - offsetRight}% - 14px);
  `;

  const styleRightRail = css`
    right: 0;
    left: calc(28px);
  `;

  const handleChange = val => {
    setMinVal(val);
    setOffset(`${100 - ((val - min) / max) * 100}`);
  };

  const handleMaxChange = val => {
    setMaxVal(val);
    setOffsetRight(`${100 - ((val - min) / max) * 100}`);
  };

  React.useEffect(
    () => {
      if (getValue) {
        getValue({
          minVal,
          maxVal
        });
      }
    },
    [minVal, maxVal]
  );

  return (
    <div className={styles.root}>
      <RangeCore
        percent={percent}
        onChange={newVal => handleChange(newVal)}
        value={minVal}
        unit={unit}
        rate={step}
        min={min}
        max={maxVal}
        className={cx({
          [styles.rail]: true,
          [className]: className
        })}
        {...restProps}
      >
        <RangeThumb withAffordance css={styleThumb} />
      </RangeCore>
      <RangeCore
        percent={percent}
        onChange={newVal => handleMaxChange(newVal)}
        value={maxVal}
        unit={unit}
        rate={step}
        min={minVal}
        max={max}
        css={styleRightRail}
        className={cx({
          [styles.rail]: true,
          [className]: className
        })}
        {...restProps}
      >
        <RangeThumb withAffordance css={styleThumbRight} />
      </RangeCore>
      <RangeRail bgRail className={cx(styles.progressContainer)} />
      <RangeRail css={styleProgress} className={cx(styles.progress)} />
    </div>
  );
};

export default InputRangeDouble;
