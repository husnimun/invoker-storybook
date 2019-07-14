import styles from './Table.module.scss';
import React, { Component } from 'react';
import classnames from 'classnames';

import TableRow from '../TableRow/TableRow';
import TableHeader from '../TableHeader/TableHeader';

import Text from '../Text/Text';

class Table extends Component {
  render() {
    let { head, body, className, message, ...restProps } = this.props;
    return (
      <div className={styles.root}>
        <table
          {...restProps}
          className={classnames({
            [styles.table]: true,
            [className]: className
          })}
        >
          <thead>
            {head && (
              <TableHeader className={styles.tableHeader}>{head}</TableHeader>
            )}
          </thead>
          <tbody>
            {body &&
              body.map((row, index) => (
                <TableRow key={index} className={styles.tableRow}>
                  {row}
                </TableRow>
              ))}
          </tbody>
        </table>
        {message && (
          <Text className={styles.message} heading5 component="p">
            {message}
          </Text>
        )}
      </div>
    );
  }
}

export default Table;
