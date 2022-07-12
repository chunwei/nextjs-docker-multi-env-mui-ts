1: 按模块划分以\_下划线区分，名称以“驼峰”命令; order_tradeOk  
2: 去掉多层嵌套  
3: 加注释标注功能性  
4: 占位符用{{}}，转义时统一转为 s%  
5: 给翻译统一给 csv 文件，程序各个端自己转为需要的文件  
6: csv 以字母排序，保证同一模块在一起  
7: google 翻译，结合 opensea 翻译  
8: App 起步中英文同步开发  
9: 命名尽量简写--简写需要在 csv 文件内，注释上全称

模块划分  
asset*  
collection*  
search*  
user*  
order\*  
event*  
sdk*  
wallet\*

m* module // 小模块  
g* globle // 全局文案  
p\* page // 跟着页面走
neg // negative 代表 - 负号
