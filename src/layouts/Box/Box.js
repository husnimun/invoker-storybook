import styles from './Box.module.scss'
import React from 'react'
import classnames from 'classnames'
import { oneOf} from 'prop-types'

import withDirectionProps from '../../components/__private/withDirectionProps'
import withJustifyProps from '../../components/__private/withJustifyProps'
import withAlignProps from '../../components/__private/withAlignProps'

const Box = ({
  children,
  component,
  className,

  inline,

  direction,
  justify,
  align,

  ...restProps
}) => {
  let Component = component || 'div'

  return (
    <Component
      className={classnames({
        [styles.root]: !inline,
        [styles.inline]: inline,

        [styles[direction]]: direction,
        [styles[justify]]: justify,
        [styles[align]]: align,

        [className]: className,
      })}
      {...restProps}
    >
      {children}
    </Component>
  )
}

Box.displayName = 'Box'

Box.defaultProps = {
  direction: 'row',
  justify: 'justifyStart',
  align: 'alignCenter',
}

Box.propTypes = {
  direction: oneOf(['row', 'rowReverse', 'column', 'columnReverse']),
  justify: oneOf(['justifyStart', 'justifyEnd', 'justifyCenter', 'justifyAround', 'justifyBetween', 'justifyEvenly']),
  align: oneOf(['alignStart', 'alignEnd', 'alignCenter', 'alignStretch', 'alignBaseline']),
}

export default withDirectionProps(withJustifyProps(withAlignProps(Box)))
