import { useRouter } from "next/router";

/*
 * @Author: Chunwei Lu
 * @Date: 2022-06-28 22:34:10
 * @LastEditTime: 2022-06-28 22:38:35
 * @LastEditors: Chunwei Lu
 * @FilePath: /nextjs-docker-multi-env/pages/[chain]/launchpad/index.tsx
 */
const LanuchPad = () => {
  const router = useRouter();
  return (
    <div>
      <h1>{router.query.chain} LanuchPad index</h1>
    </div>
  );
};
export default LanuchPad;
