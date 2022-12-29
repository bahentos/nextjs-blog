import React from 'react'
import cl from 'classnames'
import s from './index.module.scss'

const Section = ({
  className,
  children
}) => {
  return (
    <section className={cl(className, s.section)} >{children}</section>
  )
}

export default Section