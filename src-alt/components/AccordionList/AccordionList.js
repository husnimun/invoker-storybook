import styles from './AccordionList.module.scss';
import React, { Component } from 'react';
import cx from 'classnames';
import { AccordionContext } from '../__context';

class AccordionList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleIndex: null,
    };
  }

  setVisibleIndex = index => {
    this.setState({
      ...this.state,
      visibleIndex: index,
    });
  };

  render() {
    let { children, className, ...restProps } = this.props;
    return (
      <AccordionContext.Provider
        value={{
          visibleIndex: this.state.visibleIndex,
          setVisibleIndex: this.setVisibleIndex,
        }}
      >
        <div
          className={cx({
            [styles.root]: true,
            [className]: className,
          })}
          {...restProps}
        >
          {children}
        </div>
      </AccordionContext.Provider>
    );
  }
}

export default AccordionList;
