import styles from './Image.module.scss';
import React, { Component } from 'react';
import classnames from 'classnames';

const shouldScaleImage = fit => fit === 'cover' || fit === 'contain';

class Image extends Component {
  static defaultProps = {
    color: 'transparent',
    fit: 'none'
  };

  componentDidMount = () => {
    if (shouldScaleImage(this.props.fit)) {
      this.loadImage();
    }
  };

  loadImage() {
    if (typeof window !== 'undefined') {
      const image = new window.Image();
      image.onload = this.handleLoad;
      image.onerror = this.handleError;
      image.src = this.props.src;
    }
  }

  handleError = () => {
    if (this.props.onError) {
      this.props.onError();
    }
  };

  handleLoad = () => {
    if (this.props.onLoad) {
      this.props.onLoad();
    }
  };

  render() {
    const {
      children,
      className,
      containerClassName,
      containerStyle,
      bgColor,
      fit,
      src,
      alt,
      onLoad,
      naturalWidth,
      naturalHeight,
      onError,
      srcSet,
      ...restProps
    } = this.props;

    const scaledImage = shouldScaleImage(fit);

    const style = {
      backgroundColor: bgColor,
      backgroundImage: `url(${src})`
    };

    const childContent = children ? (
      <div className={styles.children}>{children}</div>
    ) : null;

    return scaledImage ? (
      <div
        style={style}
        className={classnames({
          [styles.container]: true,
          [styles[fit]]: fit,
          [className]: className
        })}
        aria-label={alt}
        role="img"
        {...restProps}
      >
        {childContent}
      </div>
    ) : (
      <div
        className={classnames({
          [styles.container]: true,
          [containerClassName]: containerClassName
        })}
        style={{
          backgroundColor: bgColor,
          paddingBottom: `${(naturalHeight / naturalWidth) * 100}%`,
          ...containerStyle
        }}
      >
        <img
          className={classnames({
            [styles.root]: true,
            [className]: className
          })}
          src={src}
          alt={alt}
          onLoad={this.handleLoad}
          onError={this.handleError}
          {...restProps}
        />
        {childContent}
      </div>
    );
  }
}

export default Image;
