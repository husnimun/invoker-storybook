import styles from './Tooltips.module.scss';
import React from 'react';
import cx from 'classnames';

const Tooltips = ({
  children,
  content,
  onHover,
  top,
  topLeft,
  topRight,
  bottom,
  bottomLeft,
  bottomRight,
  left,
  leftTop,
  leftBottom,
  right,
  rightTop,
  rightBottom,
  withArrow = true,
  className,
  ...restProps
}) => {
  let [hover, setHover] = React.useState(false);

  const handleHover = () => {
    setHover(true);
    if (onHover) {
      onHover();
    }
  };

  return (
    <div
      onMouseOver={handleHover}
      onMouseOut={() => setHover(false)}
      className={cx({
        [styles.root]: true,
        [className]: className
      })}
      {...restProps}
    >
      {children}
      {hover && (
        <div
          className={cx({
            [styles.container]: true,
            [styles.containerLeft]: topLeft || bottomLeft,
            [styles.containerRight]: topRight || bottomRight || left,
            [styles.containerCenter]: top || bottom,
            [styles.containerMiddle]: left || right
          })}
        >
          <div
            className={cx({
              [styles.tooltipsTop]: top || topLeft || topRight,
              [styles.tooltipsBottom]: bottom || bottomLeft || bottomRight,
              [styles.tooltipsLeft]: left || leftTop || leftBottom,
              [styles.tooltipsRight]: right || rightTop || rightBottom,
              [styles.tooltipsAlignMiddle]: left || right,
              [styles.tooltipsAlignTop]: leftTop || rightTop,
              [styles.tooltipsAlignBottom]: leftBottom || rightBottom
            })}
          >
            <div className={styles.content}>{content}</div>
            <div
              className={cx({
                [styles.arrow]: withArrow,
                [styles.arrowPositionTop]: bottom || bottomRight || bottomLeft,
                [styles.arrowPositionBottom]: top || topLeft || topRight,
                [styles.arrowPositionLeft]: right || rightTop || rightBottom,
                [styles.arrowPositionRight]: left || leftTop || leftBottom,
                [styles.arrowAlignLeft]: topLeft || bottomLeft,
                [styles.arrowAlignCenter]: top || bottom,
                [styles.arrowAlignRight]: topRight || bottomRight,
                [styles.arrowAlignTop]: leftTop || rightTop,
                [styles.arrowAlignMiddle]: left || right,
                [styles.arrowAlignBottom]: leftBottom || rightBottom
              })}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Tooltips;
