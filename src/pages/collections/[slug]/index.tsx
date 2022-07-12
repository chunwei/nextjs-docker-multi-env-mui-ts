/*
 * @Author: Chunwei Lu
 * @Date: 2022-06-28 22:14:44
 * @LastEditTime: 2022-06-28 22:15:54
 * @LastEditors: Chunwei Lu
 * @FilePath: /nextjs-docker-multi-env/pages/collections/[slug]/index.tsx
 */
import { useRouter } from "next/router";

const CollectionIndex = () => {
  const router = useRouter();
  return (
    <div className="collection-page">
      <h2 className="title">Collection {router.query.slug}</h2>
    </div>
  );
};
export default CollectionIndex;
