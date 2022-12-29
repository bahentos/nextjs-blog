import React from 'react'
import cl from 'classnames'
import s from './index.module.scss'
import Link from 'next/link'
import { AiOutlineArrowLeft } from 'react-icons/ai'

const Article = ({
  className,
  backUrl,
  children
}) => {
  return (
    <article className={cl(className, s.article)}>
      <Link href={backUrl}>
        <a className={s.articleBack}>
          <AiOutlineArrowLeft />
        </a>
      </Link>
      <div className={s.articleContent}>{children}</div>
    </article>
  );
}

export default Article