import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login'
import Main from '@/components/main/Main'
import CakeEdit from '@/components/edit/CakeEdit'

Vue.use(Router)

// 路由访问的路径会默认在前面加上主页路径 index
export default new Router({
  linkActiveClass: 'active',
  hashbang: true, // 将路径格式化为#!开头
  history: true, // 启用HTML5 history模式，可以使用pushState和replaceState来管理记录
  routes: [
    {
      path: '/',
      name: 'default',
      component: Login
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    },
    {
      path: '/cakeEdit/:cake',
      name: 'CakeEdit',
      component: CakeEdit
    }
  ]
})
