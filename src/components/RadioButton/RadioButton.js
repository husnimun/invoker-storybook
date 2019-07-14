import styles from './RadioButton.module.scss';
import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import { RadioButtonContext } from '../__context';

const RadioButton = ({ children, isDisabled, id, className, ...restProps }) => {
  const [disabled, setDisabled] = useState();
  const [index, setIndex] = useState();

  useEffect(() => {
    setDisabled(isDisabled);
    setIndex(id);
  }, []);

  return (
    <RadioButtonContext.Provider value={{ disabled, index }}>
      <div
        className={classnames({
          [styles.root]: true,
          [className]: className,
        })}
        {...restProps}
      >
        {children}
      </div>
    </RadioButtonContext.Provider>
  );
};

export default RadioButton;
