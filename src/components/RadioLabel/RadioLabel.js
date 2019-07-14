import styles from './RadioLabel.module.scss';
import React, { useContext } from 'react';
import classnames from 'classnames';
import { RadioContext, RadioButtonContext } from '../__context';

import Text from '../Text/Text';

const RadioLabel = ({
  id,
  label,
  className,
  isDisabled,
  onClick,
  ...restProps
}) => {
  const listContext = useContext(RadioContext);
  const buttonContext = useContext(RadioButtonContext);

  const handleClick = e => {
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Text
      htmlFor={`radio__${listContext.props.name}${buttonContext.index}`}
      className={classnames({
        [styles.root]: true,
        [className]: className,
        [styles.disabled]: isDisabled || buttonContext.disabled,
      })}
      onClick={handleClick}
      heading5
      component="label"
      {...restProps}
    >
      {label}
    </Text>
  );
};

export default RadioLabel;
