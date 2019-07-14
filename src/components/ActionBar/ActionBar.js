import styles from './ActionBar.module.scss';
import React from 'react';
import cx from 'classnames';

const ActionBar = ({ children, vertical, className, ...restProps }) => {
  let lastScrollTop = 0;
  let [scrolling, setScrolling] = React.useState(false);

  const scrollingThePage = () => {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
    lastScrollTop = st <= 0 ? 0 : st;
  };

  // const handlingTap = () => {
  //   if (!scrolling) {
  //     setScrolling(true)
  //   }
  // }

  React.useEffect(() => {
    window.addEventListener('scroll', scrollingThePage, false);
    document.body.addEventListener('touchmove', scrollingThePage, false);
    return function cleanup() {
      window.removeEventListener('scroll', scrollingThePage, false);
      document.body.removeEventListener('touchmove', scrollingThePage, false);
    };
  }, []);

  // React.useEffect(() => {
  //   window && window.addEventListener('click', handlingTap, false)
  //   document.body.addEventListener('click', handlingTap, false)
  //   return () => {
  //     window.removeEventListener('click', handlingTap, false)
  //     document.body.removeEventListener('click', handlingTap, false)
  //   }
  // }, [])

  return (
    <div
      className={cx({
        [styles.root]: true,
        [styles.scrolling]: scrolling,
        [className]: className
      })}
      {...restProps}
    >
      <div
        className={cx({
          [styles.container]: true,
          [styles.horizontal]: !vertical,
          [styles.vertical]: vertical
        })}
      >
        {children}
      </div>
    </div>
  );
};

export default ActionBar;
