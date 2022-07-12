import { useRouter } from "next/router";
import { Fragment } from "react";

/*
 * @Author: Chunwei Lu
 * @Date: 2022-06-28 21:24:02
 * @LastEditTime: 2022-06-28 22:10:14
 * @LastEditors: Chunwei Lu
 * @FilePath: /nextjs-docker-multi-env/pages/assets/[...cct]/index.tsx
 */

const AssetDetails = (props) => {
  const router = useRouter();
  console.log(router);
  return (
    <Fragment>
      <h1>Asset: chain / contract / tokenid</h1>
      <div>{router.pathname}</div>
      <div>{JSON.stringify(router.query)}</div>
    </Fragment>
  );
};
export default AssetDetails;
