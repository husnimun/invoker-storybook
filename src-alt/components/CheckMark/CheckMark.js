import styles from './CheckMark.module.scss';
import React, { useEffect, useContext, useState } from 'react';
import classnames from 'classnames';
import { CheckboxContext } from '../__context';

const Checkmark = ({
  large,
  className,
  isChecked,
  isDisabled,
  component,
  ...restProps
}) => {
  let Component = component ? component : 'span';

  const checkContext = useContext(CheckboxContext);
  let [disabled, setDisable] = useState(null);
  let [checked, setChecked] = useState();
  let [value, setValue] = useState();

  const handleChange = e => {
    if (!disabled) {
      setChecked(!checked);
      if (checkContext.onChange) {
        checkContext.onChange(!checked);
      }
    }
  };

  useEffect(() => {
    setDisable(checkContext.isDisabled);
    setChecked(checkContext.isChecked);
    setValue(checkContext.value);
  }, [disabled, checked, value]);

  return (
    <Component
      className={classnames({
        [styles.root]: true,
        [className]: className,
        [styles.normal]: !large,
        [styles.large]: large,
      })}
      {...restProps}
    >
      <input
        id={`checkbox__${checkContext.name}${checkContext.id}`}
        type="checkbox"
        name={checkContext.name}
        className={classnames({
          [styles.box]: true,
          [styles.normal]: !large,
          [styles.large]: large,
        })}
        checked={checked || false}
        disabled={disabled}
        value={value}
        onChange={handleChange}
      />
      <div
        onClick={handleChange}
        className={classnames({
          [styles.checkmark]: true,
          [styles.hoverCheckmark]: checkContext.hover,
          [styles.normal]: !large,
          [styles.large]: large,
          [styles.disabled]: disabled,
        })}
        onMouseOver={checkContext.onHover}
        onMouseLeave={checkContext.onLeave}
      />
    </Component>
  );
};

export default Checkmark;
