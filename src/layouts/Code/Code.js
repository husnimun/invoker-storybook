import styles from './Code.module.scss';
import React, { useEffect } from 'react';
import cx from 'classnames';
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx.min';
import './glamor';

import Text from '../../components/Text/Text';

const Code = ({ children, className, ...restProps }) => {
  useEffect(() => Prism.highlightAll(), []);

  return (
    <div {...restProps}>
      <Text
        style={{ marginBottom: '12px', color: '#484848' }}
        heading5
        component="h4"
      >
        Snippets
      </Text>
      <div className={cx(styles.root, 'gatsby-highlight')}>
        <pre className={cx('gatsby-code-jsx')}>
          <code className={cx('language-jsx', 'gatsby-code-jsx', styles.font)}>
            {children.trim()}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default Code;
