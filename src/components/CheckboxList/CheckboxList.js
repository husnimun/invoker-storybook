import styles from './CheckboxList.module.scss';
import React, { Component } from 'react';
// import classnames from 'classnames';

import Checkbox from './../Checkbox/Checkbox';
import Checkmark from './../Checkmark/Checkmark';
import Text from './../Text/Text';

class CheckboxList extends Component {
  render() {
    return (
      <div>
        <Checkbox className={styles.checkbox}>
          <Checkmark className={styles.mark} />
          <Text className={styles.label} heading5>
            First checkbox label
          </Text>
        </Checkbox>
        <Checkbox className={styles.checkbox}>
          <Checkmark className={styles.mark} />
          <Text className={styles.label} heading5>
            Second checkbox label
          </Text>
        </Checkbox>
      </div>
    );
  }
}

export default CheckboxList;
