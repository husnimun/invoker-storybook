import { useState, useEffect } from 'react';

/**
 * Check if a query is matched and listen for changes on that query.
 * The value will be updated if the window is resized.
 *
 * @param {string} query Query string like used in css
 * @returns {boolean} True if query condition is met, false otherwise
 *
 * @example
 *   const Device = () => {
 *     const isMobile = useMediaQuery('(max-width: 375px)');
 *     const isTablet = useMediaQuery('(min-width: 378px) and (max-width: 768px)');
 *
 *     if (isMobile) return <p>You're on a mobile right now</p>;
 *     if (isTablet) return <p>You're on a tablet right now</p>;
 *     return <p>You're on a desktop computer right now</p>;
 *   };
 */

const useMediaQuery = (query) => {

  const [matches, setMatches] = useState(false);

  useEffect(() => {
    setMatches(() => window.matchMedia(query).matches)
  }, [])

  useEffect(() => {
    const queryList = window.matchMedia(query);
    setMatches(queryList.matches);

    const listener = (evt) =>
      setMatches(evt.matches);

    queryList.addListener(listener);
    return () => queryList.removeListener(listener);
  }, [query]);

  return matches;
};

/** Default queries ready to use
 *  The breakpoint values are the same with the scss tokens in tokens/layouts.scss
 *  The queries used here are the same with screen() mixin in mixins/media-queries.scss
 * */
const defaultQueries = {
  smallPhone: '(max-width: 419px)',
  phone: '(min-width: 420px) and (max-width: 719px)',
  tablet: '(min-width: 720px) and (max-width: 839px)',
  tabletLandscape: '(min-width: 840px) and (max-width: 1079px)',
  desktop: '(min-width: 1080px) and (max-width: 1439px)',
  desktopWide: '(min-width: 1440px)',
}

export { useMediaQuery, defaultQueries };
