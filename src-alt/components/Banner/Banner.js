import styles from './Banner.module.scss';
import React, { Component } from 'react';
import classnames from 'classnames';

class Banner extends Component {
  render() {
    let { tone, children, position, className, ...restProps } = this.props;

    return (
      <div
        className={classnames({
          [styles.root]: true,
          [styles[tone]]: tone,
          [className]: className
        })}
        {...restProps}
      >
        {children}
      </div>
    );
  }
}

export default Banner;
