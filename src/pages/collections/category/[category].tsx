/*
 * @Author: Chunwei Lu
 * @Date: 2022-06-28 22:21:50
 * @LastEditTime: 2022-06-28 22:26:44
 * @LastEditors: Chunwei Lu
 * @FilePath: /nextjs-docker-multi-env/pages/collections/category/[category].tsx
 */
import { useRouter } from "next/router";

const CollectionOfCategory = () => {
  const router = useRouter();
  const { category } = router.query;
  return (
    <div className="collection-page">
      <div>{router.pathname}</div>
      <h2 className="title">Collections of {category}</h2>
    </div>
  );
};
export default CollectionOfCategory;
