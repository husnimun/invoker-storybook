import styles from './Mask.module.scss';
import React, { Component } from 'react';
import classnames from 'classnames';

class Mask extends Component {
  render() {
    let {
      circle,
      rounded,
      wash,
      children,
      className,
      ...restProps
    } = this.props;

    return (
      <div
        className={classnames({
          [styles.root]: true,
          [styles.rounded]: rounded,
          [styles.circle]: circle,
          [styles.square]: !rounded && !circle,
          [className]: className
        })}
        {...restProps}
      >
        {children}
        {wash && <div className={styles.wash} />}
      </div>
    );
  }
}

export default Mask;
