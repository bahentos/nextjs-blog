import React from 'react'
import cl from 'classnames'
import s from './index.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '../../lib/client'
import Title from '../Title'

const Post = ({
  className,
  image,
  title,
  description,
  slug
}) => {
  return (
    <Link
      href={`/post/${encodeURIComponent(slug.current)}`}
      className={cl(className, s.post)}
    >
      <a className={s.postLink}>
        <Title type="small" className={s.postTitle} >
          {title}
        </Title>
        <div className={s.postContent}>
          <div >
            <Image
              src={urlFor(image).url()}
              alt={image.caption}
              width='100'
              height='100'
            />
          </div>
          <p className={s.postDescription}>
            {description}
          </p>
        </div>
      </a>
    </Link>
  )
}

export default Post