import React from 'react'
import cl from 'classnames'
import s from './index.module.scss'
import ScreenEgg from '../ScreenEgg'

const BuyMeCoffee = ({
  className
}) => {
  return (
    <ScreenEgg>
      <div className={cl(className, s.buyCoffee)}>
        <a
          href='https://buy.stripe.com/5kA7L9574SG7xCfZ3'
          target={"_blank"}
          className={s.buyCoffeeButton}
          rel="noreferrer"
        >
          Buy me a coffe...
        </a>
      </div>
    </ScreenEgg>
  )
}

export default BuyMeCoffee