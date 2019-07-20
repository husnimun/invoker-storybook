import styles from './SinglePreview.module.scss';
import React, { Component } from 'react';
import classnames from 'classnames';

import Image from '../Image/Image';

class SinglePreview extends Component {
  render() {
    const {
      isOpen,
      className,
      children,
      src,
      naturalWidth,
      naturalHeight,
      alt,
      ...restProps
    } = this.props;
    return (
      <Image
        className={classnames({
          [styles.root]: true,
          [className]: className
        })}
        fit="cover"
        alt={alt}
        src={src}
        {...restProps}
      />
    );
  }
}

export default SinglePreview;
