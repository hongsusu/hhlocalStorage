# hh-localstorage

[![hh-localstorage](https://img.shields.io/npm/v/hh-localstorage.svg)](https://www.npmjs.com/package/hh-localstorage)
   
1. 为什么用?

 * 公共方法抽离
 * 使用方便
 * 模块化
 * 易于维护

2. 如何使用?
在vue中可以使用，像挂载其他ui库一样。
 ```js
 import localStorage from 'hh-localstorage';
 Vue.use(localStorage);
 // 普通用法
 console.log(window.$localStorage.get('name'));
 // vue 用法
 console.log(this.$localStorage.get('name'));
 ```

3. 安装

  * npm

  `npm install hh-localstorage`

  * yarn

  `yarn add hh-localstorage`
