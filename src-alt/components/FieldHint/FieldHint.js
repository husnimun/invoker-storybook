import styles from './FieldHint.module.scss';
import React, { Component } from 'react';
import classnames from 'classnames';

import Text from '../Text/Text';

class FieldHint extends Component {
  render() {
    const { tone, children, ...restProps } = this.props;

    return (
      <Text
        small
        {...restProps}
        className={classnames({
          [styles.root]: true,
          [styles[tone]]: tone
        })}
      >
        {children}
      </Text>
    );
  }
}

export default FieldHint;
