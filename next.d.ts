/*
 * @Author: Chunwei Lu
 * @Date: 2022-07-03 18:13:32
 * @LastEditTime: 2022-07-03 18:17:54
 * @LastEditors: Chunwei Lu
 * @FilePath: /nextjs-docker-multi-env/next.d.ts
 */
import type { ReactElement, ReactNode } from "react";
import type {
  NextComponentType,
  NextPageContext,
} from "next/dist/shared/lib/utils";

declare module "next" {
  export declare type NextPage<P = {}, IP = P> = NextComponentType<
    NextPageContext,
    IP,
    P
  > & {
    getLayout?: (page: ReactElement) => ReactNode;
  };
}
