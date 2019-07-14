import styles from './FieldArea.module.scss';
import React from 'react';
import cx from 'classnames';

const FieldArea = ({
  dark,
  id,
  name,
  className,
  type,
  required,
  small,
  inline,
  disabled,
  value,
  setValue,
  yupShape,
  error,
  setError,
  tone,
  setTone,
  message,
  setMessage,
  onFocus,
  onBlur,
  fixed,
  ...restProps
}) => {
  const handleFocus = e => {
    setTone && setTone('');
    onFocus && onFocus(e);
  };

  const handleBlur = e => {
    onBlur && onBlur(e);
  };

  return (
    <textarea
      id={id}
      name={name}
      onChange={setValue}
      onFocus={handleFocus}
      onBlur={handleBlur}
      className={cx({
        [styles.light]: !dark,
        [styles.dark]: dark,
        [styles.normal]: !small,
        [styles.small]: small,
        [styles.stack]: !inline,
        [styles.inline]: inline,
        [styles.disabled]: disabled,
        [styles[tone]]: tone,
        [styles[fixed]]: fixed,
        [className]: className,
      })}
      disabled={disabled}
      required={required}
      {...restProps}
    >
      {value}
    </textarea>
  );
};

export default FieldArea;
