import styles from './UploaderInput.module.scss';
import React, { Component } from 'react';
import classnames from 'classnames';

import Button from './../Button/Button';

class UploaderInput extends Component {
  render() {
    let { src, className, onClick, ...restProps } = this.props;
    return (
      <div
        className={classnames({
          [styles.root]: true,
          [className]: className
        })}
        {...restProps}
      >
        <Button primary onClick={onClick} small>
          Choose file
        </Button>
      </div>
    );
  }
}

export default UploaderInput;
