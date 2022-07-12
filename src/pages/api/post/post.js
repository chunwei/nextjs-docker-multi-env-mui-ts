/*
 * @Author: Chunwei Lu
 * @Date: 2022-05-23 14:01:28
 * @LastEditTime: 2022-05-23 14:03:59
 * @LastEditors: Chunwei Lu
 * @FilePath: /nextjs-docker-multi-env/pages/api/post/post.js
 */
export default async function handler(req, res) {
  const { id } = req.query;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const post = await response.json();
  res.status(200).json(post);
}
