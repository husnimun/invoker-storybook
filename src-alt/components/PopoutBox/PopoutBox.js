import styles from './PopoutBox.module.scss';
import React, { Component } from 'react';
import cx from 'classnames';

class PopoutBox extends Component {
  constructor(props) {
    super(props);
    this.el = React.createRef();
  }

  componentDidMount = () => {
    let { parentRef } = this.props;
    let el = this.el.current;
    if (parentRef && el) {
      let coord = parentRef.current.getBoundingClientRect();
      // el.style.width = `${coord.width}px`
      // el.style.height = `${coord.height}px`
      // el.style.transform = `translate(${0}px, ${coord.top + coord.height + 8}px)`
      console.log(coord);
    }
  };

  render() {
    let {
      component,
      parentRef,
      children,
      className,
      ...restProps
    } = this.props;
    let Component = component || 'div';
    return (
      <Component
        ref={this.el}
        className={cx({
          [styles.root]: true,
          [className]: className
        })}
        {...restProps}
      >
        {children}
      </Component>
    );
  }
}

export default PopoutBox;
