import styles from './SockyHeader.module.scss';
import React from 'react';
import cx from 'classnames';

import SockyClose from '../SockyClose/SockyClose';

const SockyHeader = ({ children, className, onClick, ...restProps }) => {
  return (
    <div
      className={cx({
        [styles.root]: true
      })}
    >
      {children}
      <SockyClose light className={styles.close} onClick={onClick} />
    </div>
  );
};

export default SockyHeader;
