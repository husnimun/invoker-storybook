import styles from './Accordion.module.scss';
import React, { useContext } from 'react';
import cx from 'classnames';
import { AccordionContext } from '../__context';

const Accordion = ({
  children,
  hideOnDoubleClick,
  index,
  className,
  triggerClassName,
  ...restProps
}) => {
  let { visibleIndex, setVisibleIndex } = useContext(AccordionContext);

  const handleVisibility = () => {
    visibleIndex === index && hideOnDoubleClick
      ? setVisibleIndex(null)
      : setVisibleIndex(index);
  };

  return (
    <div
      className={cx({
        [styles.root]: true,
        [className]: className,
      })}
      {...restProps}
    >
      {children(handleVisibility, visibleIndex === index)}
    </div>
  );
};

export default Accordion;
