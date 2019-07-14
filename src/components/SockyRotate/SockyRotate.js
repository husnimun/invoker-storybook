import styles from './SockyRotate.module.scss';
import React from 'react';
import cx from 'classnames';

import Text from '../Text/Text';

const SockyRotate = ({
  children,
  className,
  onClick,
  getRotateValue,
  ...restProps
}) => {
  let [rotate, setRotate] = React.useState(0);

  React.useEffect(
    () => {
      getRotateValue(rotate);
    },
    [rotate]
  );

  const handleRotation = () => {
    if (rotate < 270) {
      setRotate(rotate + 90);
    } else {
      setRotate(0);
    }
  };

  return (
    <div
      onClick={handleRotation}
      className={cx({
        [styles.root]: true,
        [className]: className
      })}
      {...restProps}
    >
      <div className={styles.icon} />
      <Text heading4 className={styles.text} component="h4">
        Rotate 90 degrees
      </Text>
    </div>
  );
};

export default SockyRotate;
