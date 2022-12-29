import React from 'react'
import cl from 'classnames'
import s from './index.module.scss'

const ScreenEgg = ({
  className,
  type = "right",
  children
}) => {
  return (
    <div
      className={cl(
        className,
        s.screenEgg,
        type === 'right' ? s.screenEggRight : s.screenEggLeft
      )}
    >{children}
    </div>
  )
}

export default ScreenEgg