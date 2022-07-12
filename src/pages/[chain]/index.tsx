/*
 * @Author: Chunwei Lu
 * @Date: 2022-06-28 22:41:01
 * @LastEditTime: 2022-06-28 22:41:59
 * @LastEditors: Chunwei Lu
 * @FilePath: /nextjs-docker-multi-env/pages/[chain]/index.tsx
 */
import { useRouter } from "next/router";

const ChainHome = () => {
  const router = useRouter();
  return (
    <div>
      <h1>{router.query.chain} Chain Homepage</h1>
    </div>
  );
};
export default ChainHome;
