/*
 * @Author: Chunwei Lu
 * @Date: 2022-07-03 12:34:57
 * @LastEditTime: 2022-07-03 12:35:20
 * @LastEditors: Chunwei Lu
 * @FilePath: /nextjs-docker-multi-env/src/utils/create-emotions-cache.ts
 */
import createCache from "@emotion/cache";

export const createEmotionCache = () => {
  return createCache({ key: "css" });
};
