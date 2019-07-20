import styles from './TableRow.module.scss';
import React from 'react';
import classnames from 'classnames';

import requiredIcon from './img/required.svg';

import Text from '../Text/Text';

const TableRow = ({ className, children, ...restProps }) => {
  return (
    <tr
      {...restProps}
      className={classnames({
        [styles.root]: true,
        [className]: className
      })}
    >
      {children.required && (
        <td className={styles.tableCell}>
          <img
            className={classnames(styles.code, styles.required)}
            src={requiredIcon}
            alt="required"
          />
        </td>
      )}
      {children.required === false && <td className={styles.tableCell} />}
      {children.required === undefined && null}
      <td className={classnames(styles.tableCell)}>
        <Text className={classnames(styles.primary, styles.code)} heading5>
          {children.name}
        </Text>
      </td>
      <td className={styles.tableCell}>
        <Text className={styles.code} medium>
          {children.type}
        </Text>
        {children.help && (
          <Text className={styles.help} medium>
            {children.help}
          </Text>
        )}
      </td>
      <td className={styles.tableCell}>
        <Text className={styles.code} medium>
          {children.default}
        </Text>
      </td>
    </tr>
  );
};

export default TableRow;
