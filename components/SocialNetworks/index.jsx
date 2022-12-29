import React from 'react'
import cl from 'classnames'
import s from './index.module.scss'
import {
  AiFillYoutube, AiFillGithub, AiFillTwitterCircle, AiFillLinkedin
} from 'react-icons/ai'
import ScreenEgg from '../ScreenEgg'

const socialNetworks = [
  {
    id: 1,
    href: 'https://github.com/liveldi',
    icon: AiFillGithub,
  },
  {
    id: 2,
    href: 'https://www.youtube.com/webelart',
    icon: AiFillYoutube,
  },
  {
    id: 3,
    href: 'https://www.twitter.com/webelart',
    icon: AiFillTwitterCircle,
  },
  {
    id: 4,
    href: 'https://www.linkedin.com/in/elena-litvinova-574424216/',
    icon: AiFillLinkedin,
  },
]

const SocialNetworks = ({
  className
}) => {
  return (
    <ScreenEgg type="left">
      <ul className={cl(className, s.list)}>
        {socialNetworks.map((socialNetwork) => (
          <li
            key={socialNetwork.id}
            className={s.listItem}
          >
            <a
              href={socialNetwork.href}
              target="_blank"
              className={s.listLink}
              rel="noreferrer"
            >
              {React.createElement(
                socialNetwork.icon,
                {
                  color: 'black',
                  size: 50
                }
              )}
            </a>
          </li>
        ))}
      </ul>
    </ScreenEgg>
  )
}

export default SocialNetworks