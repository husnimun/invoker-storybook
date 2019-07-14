import styles from './Slider.module.scss';
import React, { Component } from 'react';
import cx from 'classnames';
import { SliderContext } from '../__context';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.colRef = React.createRef();
    this.state = {
      activeIndex: 0,
      items: this.props.items,
      nextSlide: this.nextSlide,
      prevSlide: this.prevSlide,
      isTransitioning: false,
      column: this.props.column,
      maxIndex: this.props.items.length - this.props.column,
      minIndex: this.props.column - 1,
      width: 0,
      ref: this.colRef,
    };
  }

  componentDidMount = () => {
    if (this.state.ref) {
      this.setState({
        width: this.state.ref.current.clientWidth,
      });
    }
  };

  nextSlide = () => {
    if (
      this.state.activeIndex < this.state.items.length - 1 &&
      this.state.activeIndex < this.state.maxIndex
    ) {
      this.setState(
        {
          ...this.state,
          activeIndex: this.state.activeIndex + 1,
        },
        () => {
          console.log(this.state.activeIndex);
        },
      );
    }
  };

  prevSlide = () => {
    if (this.state.activeIndex > 0) {
      this.setState({
        ...this.state,
        activeIndex: this.state.activeIndex - 1,
      });
    }
  };

  render() {
    let { children, className, ...restProps } = this.props;

    return (
      <SliderContext.Provider value={this.state} {...restProps}>
        <div
          className={cx({
            [styles.root]: true,
            [className]: className,
          })}
          {...restProps}
        >
          {children}
        </div>
      </SliderContext.Provider>
    );
  }
}

export default Slider;
