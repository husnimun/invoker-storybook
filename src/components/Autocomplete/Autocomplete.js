import styles from './Autocomplete.module.scss';
import React, { Component } from 'react';
import classnames from 'classnames';

class Autocomplete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  render() {
    let {
      className,
      limitedHeight,
      isOpen,
      children,
      ...restProps
    } = this.props;

    return (
      <div
        {...restProps}
        className={classnames({
          [styles.root]: isOpen,
          [styles.limitedHeight]: limitedHeight,
          [className]: className
        })}
      >
        {children}
      </div>
    );
  }
}

export default Autocomplete;
