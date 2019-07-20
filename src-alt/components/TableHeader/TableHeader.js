import styles from './TableHeader.module.scss';
import React from 'react';
import classnames from 'classnames';

const TableHeader = ({ children, className, ...restProps }) => {
  return (
    <tr
      {...restProps}
      className={classnames({
        [styles.root]: true,
        [className]: className
      })}
    >
      {children &&
        children.map((th, index) => (
          <th key={index} className={styles.rowHeader}>
            {th}
          </th>
        ))}
    </tr>
  );
};

export default TableHeader;
