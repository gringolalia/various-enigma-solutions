import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Adivinha from './views/Adivinha.vue'
import Alegoria from './views/Alegoria.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: 'adivinha',
      name: 'Adivinha',
      component: Adivinha
    },
    {
      path: '/alegoria',
      name: 'alegoria',
      component: Alegoria
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
