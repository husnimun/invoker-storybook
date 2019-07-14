import styles from './Card.module.scss';
import React from 'react';
import classnames from 'classnames';

const Card = ({
  children,
  className,
  small,
  smedium,
  medium,
  mlarge,
  large,
  ...restProps
}) => {
  return (
    <div
      {...restProps}
      className={classnames({
        [styles.root]: true,
        [className]: className,
        [styles.small]: small,
        [styles.smedium]: smedium,
        [styles.medium]: medium,
        [styles.mlarge]: mlarge,
        [styles.large]: large
      })}
    >
      {children}
    </div>
  );
};

export default Card;
