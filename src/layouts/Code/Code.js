/* eslint react/jsx-key: 0 */
import React from 'react'
import styles from './CodeAlt.module.scss';
import Highlight, {defaultProps} from 'prism-react-renderer'
import {LiveProvider, LiveEditor, LiveError, LivePreview} from 'react-live'
// import Prism from 'prismjs';
import cx from 'classnames';
import 'prismjs/components/prism-jsx.min';

import theme from 'prism-react-renderer/themes/nightOwl'

export default ({children, className, live, render}) => {

  const language = className.replace(/language-/, '')

  if (live) {
    return (
      <div style={{marginTop: '40px', backgroundColor: 'black'}}>
        <LiveProvider code={children.trim()}>
          <LivePreview />
          <LiveEditor />
          <LiveError />
        </LiveProvider>
      </div>
    )
  }

  if (render) {
    return (
      <div style={{marginTop: '40px'}}>
        <LiveProvider code={children}>
          <LivePreview />
        </LiveProvider>
      </div>
    )
  }

  return (
    <Highlight {...defaultProps} code={children} language={language} theme={theme}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => {
          tokens.splice(-1,1)
          return (
            <div className={cx('gatsby-highlight')}>
              <pre className={cx(className, styles.root)} style={style}>
                {tokens.map((line, i) => (
                  <div {...getLineProps({ line, key: i })} >
                    {line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                ))}
              </pre>
            </div>
          )
        }}
    </Highlight>
    // <div className={cx(styles.root, 'gatsby-highlight')}>
    //   <pre className={cx('gatsby-code-jsx')}>
    //     <code className={cx('language-jsx', 'gatsby-code-jsx', styles.font)}>
    //       {children.trim()}
    //     </code>
    //   </pre>
    // </div>
  )
}
