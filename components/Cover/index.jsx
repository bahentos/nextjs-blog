import React from 'react'
import cl from 'classnames'
import s from './index.module.scss'

const Cover = ({
  className,
  title  
}) => {
  return (
    <div className={cl(className, s.cover)}>
      <h1 className={s.coverTitle} 
      dangerouslySetInnerHTML={{__html: title}}
      />
    </div>
  )
}

export default Cover