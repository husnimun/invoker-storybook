import styles from './RadioList.module.scss';
import React, { Component } from 'react';
import classnames from 'classnames';

import { RadioContext } from '../__context';

class RadioList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.selected,
      onChange: this.onChange,
      name: '',
    };
  }

  onChange = value =>
    this.setState({ ...this.state, selected: value }, () => {
      this.props.onChange(this.state.selected);
    });

  render() {
    let {
      className,
      options,
      selected,
      value,
      name,
      children,
      onChange,
      ...restProps
    } = this.props;

    return (
      <RadioContext.Provider
        value={{ state: this.state, props: this.props }}
        {...restProps}
      >
        <div
          className={classnames({
            [styles.root]: true,
            [className]: className,
          })}
        >
          {children}
        </div>
      </RadioContext.Provider>
    );
  }
}

export default RadioList;
