import './StyleguideProvider.module.scss';
import styles from './StyleguideProvider.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Helmet from 'react-helmet';

import '../../assets/fonts/fonts';

const defaultPageTitle = 'Meridian.id';

export default function StyleGuideProvider({
  fullScreen,
  children,
  meta,
  link,
  title,
  locale,
}) {
  const className = cx({
    [styles.root]: true,
    [styles.fullScreen]: fullScreen,
  });

  const pageTitle = title || defaultPageTitle;

  return (
    <main className={className}>
      <Helmet title={pageTitle} meta={meta} link={link} />
      {children}
    </main>
  );
}

StyleGuideProvider.propTypes = {
  fullScreen: PropTypes.bool,
  children: PropTypes.node,
  title: PropTypes.string,
  meta: PropTypes.array,
  link: PropTypes.array,
  locale: PropTypes.oneOf(['INA', 'ENG']),
};

StyleGuideProvider.defaultProps = {
  fullScreen: false,
  meta: [],
  link: [],
  locale: 'INA',
};
