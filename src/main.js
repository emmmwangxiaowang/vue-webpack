// 如何在 webpack 构建的项目的中 使用Vue 进行开发

// 复习 在普通网页中如何使用vue:
// 1. 使用script 标签， 引入 vue的包
// 2. 在 index 页面中构建一个 id 为 app 的 div 容器
// 3. 通过 new Vue 得到一个 vm 的实例


// 在 webpack  中尝试使用 Vue；
// 注意： 在 webpack中, 使用 import Vue from 'vue' 导入 Vue 构造函数, 功能不完整, 
// 值提供了runtime-only 的方式, 并没哟提供, 向网页中那样的使用方式;
// 包的查找规则:
// 1. 找项目根目录中有没有 node_modules 的文件夹
// 2. 在node_modules 中, 根据包名找对应的文件夹
// 3. 在vue 文件夹中找一个 package.json 的包配置文件
// 4  在这个文件中查找一个 main 属性  [main 属性制定了这个包在被加载的时候, 的入口文件]
import Vue from 'vue'
// 如果想用完整的功能 则需要手动导包
// import Vue from '../node_modules/vue/dist/vue'

let vm = new Vue({
    el: '#app',
    data: {
        msg: '123'
    }
})