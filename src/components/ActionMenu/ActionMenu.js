import styles from './ActionMenu.module.scss';
import React from 'react';
import cx from 'classnames';

import Text from '../Text/Text';

const ActionMenu = ({
  icon,
  to,
  children,
  className,
  active,
  ...restProps
}) => {
  return (
    <a
      href={to}
      className={cx({
        [styles.root]: true,
        [styles.active]: active,
        [className]: className
      })}
      {...restProps}
    >
      {icon && <div style={{ marginBottom: '4px' }}>{icon}</div>}
      {children && <Text small>{children}</Text>}
    </a>
  );
};

export default ActionMenu;
