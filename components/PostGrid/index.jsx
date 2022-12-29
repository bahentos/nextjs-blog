import React from 'react'
import cl from 'classnames'
import s from './index.module.scss'

const PostGrid = ({
  className,
  children
}) => {
  return (
    <div className={cl(className, s.postGrid)}>{children}</div>
  )
}

export default PostGrid