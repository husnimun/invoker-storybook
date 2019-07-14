import styles from './Radio.module.scss';
import React, { Component } from 'react';
import classnames from 'classnames';

import Text from './../Text/Text';

class Radio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: this.props.focus,
      value: this.props.value
    };
  }

  onBlur = () => {
    this.setState({
      ...this.state,
      focus: false
    });
  };

  onChange = e => {
    this.setState({
      ...this.state,
      value: e.target.value
    });
  };

  render() {
    let {
      id,
      name,
      className,
      checked,
      label,
      onChange,
      onClick,
      onFocus,
      ...restProps
    } = this.props;
    return (
      <div className={classnames(styles.root, className)} {...restProps}>
        <input
          className={classnames({
            [styles.input]: true,
            [styles.focus]: this.state.focus
          })}
          id={id}
          name={name}
          type="radio"
          checked={checked === this.state.value}
          onChange={this.onChange}
        />
        <label
          className={classnames({
            [styles.label]: true
          })}
          onClick={() => console.log(this.state.value)}
          onFocus={onFocus}
          onBlur={this.onBlur}
          htmlFor={id}
        >
          <Text className={styles.text} heading5>
            {label}
          </Text>
        </label>
      </div>
    );
  }
}

export default Radio;
