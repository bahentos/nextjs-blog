import React from 'react'
import cl from 'classnames'
import s from './index.module.scss'

const Article = ({
  className,
  children
}) => {
  return (
    <article className={cl(className, s.article)}>{children}</article>
  )
}

export default Article