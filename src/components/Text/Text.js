import styles from './Text.module.scss';
import React from 'react';

import classnames from 'classnames';

import stylesPositive from '../Positive/Positive.module.scss';
import stylesCritical from '../Critical/Critical.module.scss';
import stylesSecondary from '../Secondary/Secondary.module.scss';
import stylesHighlight from '../Highlight/Highlight.module.scss';
import stylesInfo from '../Info/Info.module.scss';

import stylesStrong from '../Strong/Strong.module.scss';
import stylesRegular from '../Regular/Regular.module.scss';
import stylesLight from '../Light/Light.module.scss';

import withTextProps from '../__private/withTextProps';

const Text = ({
  left,
  right,
  center,
  component,
  bullet,
  children,
  className,
  size,
  raw,
  link,
  positive,
  critical,
  secondary,
  highlight,
  info,
  strong,
  regular,
  light,
  dark,
  baseline,
  truncate,
  breakWord,
  ...restProps
}) => {
  const Component = component || (bullet ? 'li' : 'span');
  return (
    <Component
      {...restProps}
      className={classnames({
        [styles.root]: true,
        [styles[size]]: size,
        [styles.raw]: raw,
        [styles.bullet]: bullet,
        [styles.baseline]: baseline,
        [styles.link]: link,
        [styles.left]: left,
        [styles.right]: right,
        [styles.center]: center,
        [styles.truncate]: truncate,
        [styles.breakWord]: breakWord,
        [className]: className,
      })}
    >
      <span
        className={classnames({
          [stylesPositive.root]: positive,
          [stylesCritical.root]: critical,
          [stylesSecondary.root]: secondary,
          [stylesHighlight.root]: highlight,
          [stylesInfo.root]: info,
          [stylesStrong.root]: strong,
          [stylesRegular.root]: regular,
          [stylesLight.root]: light,
        })}
      >
        {children}
      </span>
    </Component>
  );
};

Text.displayName = 'Text';

Text.defaultProps = {
  baseline: true,
  bullet: false,
  size: 'medium',
};

export default withTextProps(Text);
