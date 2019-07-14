import styles from './Textfield.module.scss';
import React, { useState } from 'react';
import cx from 'classnames';

import FieldHint from '../FieldHint/FieldHint';
import FieldInputAlt from '../FieldInput/FieldInput';
import FieldLabel from '../FieldLabel/FieldLabel';

const Textfield = ({
  id,
  name,
  type,
  value,
  setValue,
  defaultValue,

  className,
  labelClassName,
  fieldClassName,

  label,
  secondaryLabel,
  tertiaryLabel,

  message,
  setMessage,
  tone,
  setTone,

  onChange,
  onBlur,
  onFocus,
  yupShape,

  small,
  inline,

  placeholder,
  disabled,
  required,

  ...restProps
}) => {
  const [internalValue, setInternalValue] = useState('');
  const [internalTone, setInternalTone] = useState('');
  const [internalMessage, setInternalMessage] = useState('');

  return (
    <div
      className={cx({
        [styles.root]: true,
        [styles.inline]: inline,
        [className]: className,
      })}
      {...restProps}
    >
      {label && (
        <FieldLabel
          className={labelClassName}
          id={id}
          label={label}
          small={small}
          inline={inline}
          secondaryLabel={secondaryLabel}
          tertiaryLabel={tertiaryLabel}
        />
      )}
      <FieldInputAlt
        id={id}
        name={name}
        type={type}
        className={fieldClassName}
        placeholder={placeholder}
        small={small}
        inline={inline}
        tone={tone ? tone : internalTone}
        setTone={setTone ? setTone : setInternalTone}
        value={value ? value : internalValue}
        setValue={
          value && setValue ? setValue : e => setInternalValue(e.target.value)
        }
        setMessage={setMessage ? setMessage : setInternalMessage}
        required
      />
      {tone && message && <FieldHint tone={tone}>{message}</FieldHint>}
      {!tone && !message && internalTone && internalMessage && (
        <FieldHint tone={internalTone}>{internalMessage}</FieldHint>
      )}
    </div>
  );
};

export default Textfield;
