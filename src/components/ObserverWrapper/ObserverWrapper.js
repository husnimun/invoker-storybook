import React from 'react';
import { useInView } from 'react-intersection-observer';

const ObserverWrapper = ({
  children,
  component,
  options,
  className,
  ...restProps
}) => {
  const Component = component || 'div';

  const useObserver =
    global.__SERVER__ ||
    ('IntersectionObserver' in window &&
      'IntersectionObserverEntry' in window &&
      'intersectionRatio' in window.IntersectionObserverEntry.prototype &&
      'isIntersecting' in window.IntersectionObserverEntry.prototype);

  const [ref, inView] = useInView(options);

  return !useObserver ? (
    <Component className={className} {...restProps}>
      {children}
    </Component>
  ) : (
    <Component ref={ref} className={className} {...restProps}>
      {inView ? children : null}
    </Component>
  );
};

export default ObserverWrapper;
