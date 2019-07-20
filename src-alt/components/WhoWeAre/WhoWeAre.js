import styles from './WhoWeAre.module.scss'
import React from 'react'
import cx from 'classnames'

import Container from '../../layouts/Container/Container'
import Text from '../Text/Text'

const WhoWeAre = ({
  className,
  ...restProps
  }) => {
  return (
    <Container>
      <main className={cx(styles.root, className)}>
        <Text heading5 className={styles.heading}>Who we are</Text>
        <Text large component="h2" className={styles.content}>
          Meridian.id is a full-service digital agency,<br/>
          focusing on designing and crafting beautiful digital products and experiences.<br/>
        </Text>
        <Text large component="p" className={styles.content}>
          For more informations go to <a target="_blank" rel="noreferrer noopener" href="http://meridian.id">meridian.id.</a>
        </Text>
      </main>
    </Container>
  )
}

export default WhoWeAre
