import styles from './PopoutAlt.module.scss';
import React from 'react';
import cx from 'classnames';

import PopoutBox from './../PopoutBox/PopoutBox';

const PopoutAlt = ({ children, className, trigger, ...restProps }) => {
  const parentRef = React.useRef(null);
  let [show, setShow] = React.useState(false);

  return (
    <div
      ref={parentRef}
      className={cx({
        [styles.root]: true,
        [className]: className
      })}
    >
      <div onClick={() => setShow(!show)}>{trigger}</div>
      {show && (
        <PopoutBox
          parentRef={parentRef}
          className={cx({
            [styles.root]: true,
            [className]: className
          })}
          {...restProps}
        >
          {children}
        </PopoutBox>
      )}
    </div>
  );
};

export default PopoutAlt;
