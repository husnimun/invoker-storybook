import styles from './Tabs.module.scss';
import React, { Component } from 'react';
import classnames from 'classnames';

import { TabContext } from '../__context';

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      onSelect: this.onSelect,
    };
  }

  onSelect = index => {
    const prevState = { ...this.state };
    prevState.activeIndex = index;
    this.setState({
      activeIndex: prevState.activeIndex,
    });
  };

  render() {
    let { children, className, ...restProps } = this.props;
    return (
      <TabContext.Provider value={this.state} {...restProps}>
        <div
          className={classnames({
            [styles.root]: true,
            [className]: className,
          })}
        >
          {this.props.children}
        </div>
      </TabContext.Provider>
    );
  }
}

export default Tabs;
