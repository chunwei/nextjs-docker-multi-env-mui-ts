/*
 * @Author: Chunwei Lu
 * @Date: 2022-05-22 14:56:18
 * @LastEditTime: 2022-07-01 10:21:08
 * @LastEditors: Chunwei Lu
 * @FilePath: /nextjs-docker-multi-env/next.config.js
 */
const { i18n } = require("./next-i18next.config");
module.exports = {
  i18n,
  experimental: {
    outputStandalone: true,
  },
};
