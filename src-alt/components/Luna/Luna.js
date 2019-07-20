import styles from './Luna.module.scss';
import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class Luna extends Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
    this.state = {
      input: this.fileInput,
      onClick: this.handleClick,
      onError: this.handleError,
      deleteImage: this.deleteImage,
      images: []
    };
  }

  deleteImage = index => {
    const images = [...this.state.images];
    images.splice(index, 1);
    this.setState({ images });
  };

  handleClick = () => {
    this.fileInput.current.click();
  };

  onChange = e => {
    let images = e.target.files;

    if (!window.FileReader) {
      throw new Error("Sorry, your browser does'nt support for preview");
    }

    for (let i = 0; i < images.length; i++) {
      let reader = new FileReader();
      reader.onerror = r => {
        throw new Error(r);
      };
      reader.onload = r => {
        const prevImages = this.state.images;
        this.setState({
          images: prevImages.concat([
            {
              url: r.target.result,
              value: r,
              file: images[i]
            }
          ])
        });
      };
      reader.readAsDataURL(images[i]);
    }
  };

  onError = err => {
    throw new Error(err);
  };

  render() {
    const { className, accept, capture, multiple, children } = this.props;

    return (
      <div
        className={classnames({
          [styles.root]: true,
          [className]: className
        })}
      >
        <input
          type="file"
          ref={this.fileInput}
          accept={Array.isArray(accept) ? accept.join(',') : accept}
          multiple={multiple}
          capture={capture}
          style={{ display: 'none' }}
          onChange={this.onChange}
          onError={this.onError}
        />
        {children(this.state)}
      </div>
    );
  }
}

Luna.defaultProps = {
  accept: 'image/*',
  capture: true,
  multiple: false
};

Luna.propTypes = {
  accept: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  capture: PropTypes.bool,
  multiple: PropTypes.bool
};

export default Luna;
