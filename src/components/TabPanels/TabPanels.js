import styles from './TabPanels.module.scss';
import React, { Component } from 'react';
import classnames from 'classnames';

import { TabContext } from '../__context';

class TabPanels extends Component {
  render() {
    const { className, children, ...restProps } = this.props;
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
            {children[context.activeIndex]}
          </div>
        )}
      </TabContext.Consumer>
    );
  }
}

export default TabPanels;
