import styles from './Spinner.module.scss';
import React from 'react';
import classnames from 'classnames';

const Spinner = ({ small, medium, className, ...restProps }) => {
  return (
    <div
      className={classnames({ [styles.root]: true, [className]: className })}
      {...restProps}
    >
      <div
        className={classnames({
          [styles.loader]: true,
          [styles.small]: small,
          [styles.medium]: !small || medium,
        })}
      />
    </div>
  );
};

export default Spinner;
