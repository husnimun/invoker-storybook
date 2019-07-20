import styles from './Checkbox.module.scss';
import React, { Component } from 'react';
import classnames from 'classnames';
import { CheckboxContext } from '../__context';

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      isDisabled: this.props.isDisabled || false,
      isChecked: this.props.isChecked || false,
      name: this.props.name || '',
      value: this.props.value || '',
      id: this.props.id || '',
      onChange: this.onChange,
      onHover: this.onHover,
      onLeave: this.onLeave,
    };
  }

  componentDidMount = () => {
    let { setValue, isChecked } = this.props;
    if (isChecked) {
      setValue(this.props);
    }
  };

  onHover = e => {
    this.setState({
      ...this.state,
      hover: true,
    });
  };

  onLeave = e => {
    this.setState({
      ...this.state,
      hover: false,
    });
  };

  onChange = isChecked => {
    let { setValue } = this.props;
    this.setState(
      {
        ...this.state,
        isChecked,
      },
      () => {
        if (setValue) {
          setValue(this.state);
        }
      },
    );
  };

  render() {
    let {
      name,
      id,
      value,
      isChecked,
      isDisabled,
      children,
      className,
      setValue,
      ...restProps
    } = this.props;

    return (
      <CheckboxContext.Provider value={this.state}>
        <div
          {...restProps}
          className={classnames({
            [styles.root]: true,
            [className]: className,
          })}
        >
          {children}
        </div>
      </CheckboxContext.Provider>
    );
  }
}

export default Checkbox;
