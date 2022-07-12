/*
 * @Author: Chunwei Lu
 * @Date: 2022-06-28 22:35:22
 * @LastEditTime: 2022-06-28 22:38:03
 * @LastEditors: Chunwei Lu
 * @FilePath: /nextjs-docker-multi-env/pages/[chain]/launchpad/[slug].tsx
 */
import { useRouter } from "next/router";

const LanuchPadDetail = () => {
  const router = useRouter();
  return (
    <div>
      <h1>
        {router.query.chain} LanuchPad {router.query.slug}
      </h1>
    </div>
  );
};
export default LanuchPadDetail;
