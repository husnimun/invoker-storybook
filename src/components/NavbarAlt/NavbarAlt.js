import styles from './NavbarAlt.module.scss'
import React from 'react'
import classnames from 'classnames'

import { Wordmark } from './../Brand/Brand'
import {  Github } from './../SocialIcons/SocialIcons'

const NavbarAlt = ({ className, ...restProps }) => {
  return (
    <div className={classnames(styles.root)}>
      <div className={classnames(styles.container)}>
        <div className={styles.brand}>
          <Wordmark className={styles.logo} />
        </div>
        <a
          href="https://github.com/vasilenka/invoker"
          className={styles.githubLink}
        >
          <Github className={styles.github} />
        </a>
      </div>
    </div>
  )
}

export default NavbarAlt
