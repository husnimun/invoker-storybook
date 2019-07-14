// import styles from './DropdownOption.module.scss';
import React, { useContext } from 'react';
// import cx from 'classnames';
import { DropdownContext } from '../__context';

const DropdownOption = ({
  value,
  label,
  onClick,
  isDisabled,
  ...restProps
}) => {
  const dropdownContext = useContext(DropdownContext);

  const handleClick = e => {
    if (dropdownContext) {
      dropdownContext.setSelected(value);
    }
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <option disabled={isDisabled} value={value} onClick={handleClick}>
      {label}
    </option>
  );
};

export default DropdownOption;
