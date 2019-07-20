import styles from './Bouncer.module.scss';
import React from 'react';
import classnames from 'classnames';

const Bouncer = ({ className, ...restProps }) => {
  return (
    <div
      className={classnames({ [styles.root]: true, [className]: className })}
      {...restProps}
    >
      <div className={styles.loader} />
    </div>
  );
};

export default Bouncer;
