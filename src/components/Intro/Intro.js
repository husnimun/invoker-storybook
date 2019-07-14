import styles from './Intro.module.scss'
import React from 'react'
import cx from 'classnames'

import Container from '../../layouts/Container/Container'
import Text from '../Text/Text'

const Hero = ({
  className,
  text,
  ...restProps
  }) => {
  return (
    <Container className={styles.container}>
      <div className={cx(styles.root, className)} {...restProps}>
        {text
          ?  <Text heading2 component="h1" className={styles.intro}>{text}</Text>
          :   <>
                <Text heading2 component="h1" className={styles.intro}>
                  An opiniated starter by Meridian.id, <br/> using <strong className={styles.highlights}>React Hooks</strong>, <strong className={styles.highlights}>SCSS</strong>, <strong className={styles.highlights}>CSS Modules</strong>, <strong className={styles.highlights}>invoker</strong>, <strong className={styles.highlights}>invoker-styles</strong>, <strong className={styles.highlights}>codesplitting</strong>, and a lot of <strong className={styles.highlights}>love.</strong>
                </Text>
                <Text heading4 className={styles.letsgo}>
                  Let's make well-crafted website and mobile app available for everyone!
                </Text>
              </>
        }
      </div>
    </Container>
  )
}

export default Hero
