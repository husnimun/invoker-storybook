import styles from './FieldInput.module.scss';
import React from 'react';
import cx from 'classnames';
import { bool, func, object, string, oneOf, oneOfType } from 'prop-types';

import * as yup from 'yup';
import { defaultShape } from './helper/fieldInputHelper';

const FieldInput = ({
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
  ...restProps
}) => {
  const validationSchema = yup
    .object()
    .shape(yupShape || defaultShape(type, required, id));

  const validateField = () => {
    validationSchema
      .validate({
        [type || 'text']: value,
      })
      .then(valid => {
        if (valid) {
          setTone && setTone('');
          setMessage && setMessage(null);
        }
      })
      .catch(err => {
        if (err) {
          setTone && setTone('critical');
          setMessage && setMessage(err.errors[0]);
        }
      });
  };

  const handleFocus = e => {
    setTone && setTone('');
    onFocus && onFocus(e);
  };

  const handleBlur = e => {
    validateField();
    onBlur && onBlur(e);
  };

  return (
    <input
      type={type}
      id={id}
      name={name}
      value={value}
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
        [styles[tone]]: tone,
        [styles.disabled]: disabled,
        [className]: className,
      })}
      disabled={disabled}
      required={required}
      {...restProps}
    />
  );
};

FieldInput.propTypes = {
  name: string.isRequired,
  id: string,
  className: oneOfType([string, object]),
  required: bool,
  disabled: bool,
  small: bool,
  type: oneOf(['text', 'email', 'password', 'number']).isRequired,
  value: string,
  setValue: func,
  tone: oneOf(['critical', 'neutral', 'positive', '']),
  setTone: func,
  setMessage: func,
  placeholder: string,
  yupShape: object,
};

FieldInput.defaultProps = {
  type: 'text',
  disabled: false,
  value: '',
  tone: '',
  inline: false,
  required: false,
};

export default FieldInput;
