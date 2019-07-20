import styles from './TabList.module.scss';
import React, { Component } from 'react';
import classnames from 'classnames';

import { TabContext } from '../__context';

class TabList extends Component {
  render() {
    const { children, className, ...restProps } = this.props;
    return (
      <TabContext.Consumer>
        {context => (
          <div
            className={classnames({
              [styles.root]: true,
              [className]: className,
            })}
            {...restProps}
          >
            {React.Children.map(children, (child, index) =>
              React.cloneElement(child, {
                isActive: context.activeIndex === index,
                onSelect: () => context.onSelect(index),
              }),
            )}
          </div>
        )}
      </TabContext.Consumer>
    );
  }
}

export default TabList;
