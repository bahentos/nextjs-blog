
import React from "react"
import { Article, Title, Content } from '/components'
import s from './styles.module.scss'
import { client } from '../../lib/client'
import { format } from "date-fns"
import Head from "next/head"

const Post = ({ post }) => {
    const date = format(new Date(post.publishedDate), 'dd MMM yyyy ')

    return (
        <Article backUrl='/' className={s.post} >
            <Head>
                <title>{post.meta_title}</title>
            </Head>
            <Title className={s.postTitle} >{post.title}</Title>
            <p className={s.postDate}>{date}</p>
            <Content body={post.body} />
        </Article>
    )
}

export default Post


// eslint-disable-next-line @next/next/no-typos
export async function getStaticPaths() {
    const query = `*[type == "post"] {slug {current}}`;
    const posts = await client.fetch(query)

    const paths = posts.map((post) => ({
        params: {
            slug: post.slug.current
        }
    }))
    return {
        paths,
        fallback: 'blocking'
    }
}


export async function getStaticProps({ params: { slug } }) {
    const query = `*[_type == "post" && slug.current == '${slug}'][0]`
    const post = await client.fetch(query)
    return {
        props: {
            post
        }
    }
}