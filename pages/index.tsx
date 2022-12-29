import s from './index.module.scss';
import {
  Cover,
  Section,
  SocialNetworks,
  Title,
  BuyMeCoffee,
  PostGrid,
  Post,
} from '../components';
import { loadPosts } from './api/posts';
import { useState } from 'react';

const LOAD_MORE_STEP = 4;

export default function Home({ initialPosts, total }) {
 const [posts, setPosts] = useState(initialPosts)
 console.log(posts);

  return (
    <div className={s.container}>
      <Section>
        <Cover title="Elena<br/> Litvinova" />
        <SocialNetworks />
        <BuyMeCoffee />
      </Section>
      <Section>
        <Title type="medium">New Post</Title>{' '}
<PostGrid>
  {posts.map((post)=> (
    <Post 
    key={post.slug.current}
    {...post}
    />
  ))}
</PostGrid>
      </Section>
    </div>
  );
}

export const getServerSideProps = async () => {
  const { posts, total } = await loadPosts(0, LOAD_MORE_STEP);
  return {
    props: {
      initialPosts: posts,
      total,
    },
  };
};
