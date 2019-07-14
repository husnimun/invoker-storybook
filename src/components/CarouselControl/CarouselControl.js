// import styles from './CarouselControl.module.scss';
import React, { useContext } from 'react';
// import cx from 'classnames';
import { OverlappingContext } from '../__context';

const CarouselNext = ({ children, ...restProps }) => {
  let context = useContext(OverlappingContext);
  return <React.Fragment {...restProps}>{children(context)}</React.Fragment>;
};

export default CarouselNext;
