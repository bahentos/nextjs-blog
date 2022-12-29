// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { count } from 'console';
import type { NextApiRequest, NextApiResponse } from 'next';

import { client } from '../../lib/client';

type Data = {
  name: string;
};

export default async function posts(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { start, end } = req.query;
  if (isNaN(Number(start)) || isNaN(Number(end))) {
    return res.status(400);
  }
  const { posts, total } = await loadPosts(start, end);
  res.status(200).json({ posts, total });
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
