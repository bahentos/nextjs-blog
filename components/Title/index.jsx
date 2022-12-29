import React from 'react'
import cl from 'classnames'
import s from './index.module.scss'

const Title = ({
  className,
  type,
  children
}) => {
  if (type === 'small') {
    return (
      <h3 className={cl(className, s.title, s.titleSmall)} >{children}</h3>
    )
  }
  return (
    <h2 className={cl(className, s.title, s.titleMedium)} >{children}</h2>
  )
}


export default Title