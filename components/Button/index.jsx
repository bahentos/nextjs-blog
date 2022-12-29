import React from 'react'
import cl from 'classnames'
import s from './index.module.scss'

const Button = ({
  className,
  children,
  onClick,
  disabled,
}) => {
  return (
    <button
      className={cl(className, s.button)}
      onClick={onClick}
      disabled={disabled}
    >{children}</button>
  )
}

export default Button