import styles from './Secondary.module.scss';
import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

const Secondary = ({ children, className, ...restProps }) => {
  return (
    <span {...restProps} className={classnames(styles.root, className)}>
      {children}
    </span>
  );
};

Secondary.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default Secondary;
