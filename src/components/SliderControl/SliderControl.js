// import styles from './SliderControl.module.scss'
import React, { useContext } from 'react';
// import cx from 'classnames'
import { SliderContext } from '../__context';

const SliderControl = ({ children, className, ...restProps }) => {
  let context = useContext(SliderContext);

  return <React.Fragment {...restProps}>{children(context)}</React.Fragment>;
};

export default SliderControl;
