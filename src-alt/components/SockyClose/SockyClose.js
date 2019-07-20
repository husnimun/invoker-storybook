import styles from './SockyClose.module.scss';
import React from 'react';
import cx from 'classnames';
import { ReactComponent as CloseLight } from './close.svg';
import { ReactComponent as CloseDark } from './close-dark.svg';

const SockyClose = ({ className, light, dark, onClick, ...restProps }) => {
  return (
    <div
      className={cx({
        [styles.root]: true,
        [styles.light]: light,
        [styles.dark]: !light || dark,
        [className]: className
      })}
      {...restProps}
    >
      {light && <CloseLight onClick={onClick} />}
      {dark && <CloseDark onClick={onClick} />}
    </div>
  );
};

export default SockyClose;
