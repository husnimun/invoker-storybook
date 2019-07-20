import {useLayoutEffect} from 'react';

// Prevent users from being able to scroll the body (i.e. when modals appear on the screen)
// Credits & usage goes here: https://usehooks.com/useLockBodyScroll/

const useLockBodyScroll = () => {
  useLayoutEffect(() => {
    const initialStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    return () => (document.body.style.overflow = initialStyle);
  }, []);
};

export { useLockBodyScroll };
