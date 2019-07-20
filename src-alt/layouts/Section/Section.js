import styles from './Section.module.scss';
import React from 'react';
import cx from 'classnames';

const Section = ({
  children,
  component,
  smallPhone,
  phone,
  tablet,
  tabletLandscape,
  desktop,
  desktopWide,
  className,
  ...restProps
  }) => {

  React.useLayoutEffect(() => {
    if(typeof window !== 'undefined') {
      console.log('WIDTH', window.innerWidth)
    }
  }, [])

  let Component = component || 'section'
  return (
    <Component
      className={cx({
        [styles.root]: true,
        [styles[smallPhone]]: smallPhone,
        [styles[phone]]: phone,
        [styles[tablet]]: tablet,
        [styles[tabletLandscape]]: tabletLandscape,
        [styles[desktop]]: desktop,
        [styles[desktopWide]]: desktopWide,
        [className]: className,
      })}
      {...restProps}>
      {children}
    </Component>
  )
}

export default Section
