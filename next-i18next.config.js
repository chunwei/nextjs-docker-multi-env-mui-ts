/*
 * @Author: Chunwei Lu
 * @Date: 2022-07-01 10:04:28
 * @LastEditTime: 2022-07-01 11:35:25
 * @LastEditors: Chunwei Lu
 * @FilePath: /nextjs-docker-multi-env/next-i18next.config.js
 */
const path = require("path");

module.exports = {
  i18n: {
    locales: ["en", "zh", "tw", "kr"],
    defaultLocale: "en",
  },
  reloadOnPrerender: true, // production set to false
  //   localePath: path.resolve("./my/custom/path"), // default: './public/locales'
};

// Options
// key  	             默认值	              备注
// -----------------------------------------------------------------
// defaultNS	        'common'
// localePath	        './public/locales'	可以是一个函数，见下面的注释。
// localeExtension	    'json'	            忽略 if localePath是一个函数。
// localeStructure	    '{{lng}}/{{ns}}'	忽略 if localePath是一个函数。
// reloadOnPrerender	false               翻译 JSON 文件的更新时重新加载,建议生产环境关闭
// serializeConfig	    true
// use()	            []                  用于插件

// All other i18next options and react-i18next options can be passed in as well.
