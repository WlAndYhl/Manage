import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/login/login'
import Role from '@/components/Role/Role'
import Order from '@/components/Order/order'
import Account from '@/components/Account/account'
import Dial from '@/components/dial/dial.vue'
Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/dial',
      name: 'Dial',
      component: Dial
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'order',
          name: 'Order',
          component: Order
        },
        {
          path: 'role',
          name: 'Role',
          component: Role,
          meta: {
            title: '角色列表'
          }
        },
        {
          path: 'account',
          name: 'Account',
          component: Account,
          meta: {
            title: '信息列表'
          }
        }
      ]
    }
  ]
})
router.afterEach((to) => {
  setTimeout(function () {
    router.app.$store.dispatch('setTitle', to.meta.title)
  }, 0)
  // setTimeout(() => {
  //   to.meta && router.app.$store.dispatch(SETTITLE, {title: to.meta.title})
  // }, 60)
})
export default router
