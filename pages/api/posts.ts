// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { count } from 'console';
import type { NextApiRequest, NextApiResponse } from 'next';

import { client } from '../../lib/client';

type Data = {
  name: string;
};

export default function posts(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ name: 'John Doe' });
}

export async function loadPosts(start, end) {
  const query = `{
    "posts": *[_type == "post"] | order(publishedDate desc) [${start}...${end}] {_id, publishedDate, title, slug, description, image},
   "total": count(*[_type == "post"]) 
  }`;
  const { posts, total } = await client.fetch(query);

  return {
    posts,
    total,
  };
}
