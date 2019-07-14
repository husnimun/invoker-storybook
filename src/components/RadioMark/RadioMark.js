import styles from './RadioMark.module.scss';
import React, { useContext } from 'react';
import classnames from 'classnames';
import { RadioContext, RadioButtonContext } from '../__context';

const RadioMark = ({
  className,
  isDisabled,
  checked,
  value,
  id,
  name,
  large,
  onChange,
  onClick,
  ...restProps
}) => {
  const listContext = useContext(RadioContext);
  const buttonContext = useContext(RadioButtonContext);

  const handleChange = e => {
    listContext.state.onChange(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };

  const handleClick = e => (onClick ? onClick(e) : null);

  return (
    <input
      id={`radio__${name || listContext.props.name}${id ||
        buttonContext.index}`}
      name={listContext.props.name}
      type="radio"
      value={value}
      disabled={isDisabled || buttonContext.disabled}
      checked={checked || value === listContext.state.selected}
      className={classnames({
        [styles.root]: true,
        [styles.normal]: !large,
        [styles.large]: large,
        [className]: className,
        [styles.disabled]: isDisabled || buttonContext.disabled,
      })}
      onChange={handleChange}
      onClick={handleClick}
      {...restProps}
    />
  );
};

export default RadioMark;
