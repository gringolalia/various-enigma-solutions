import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Adivinha from './views/Adivinha.vue'
import Alegoria from './views/Alegoria.vue'
import Arcano from './views/Arcano.vue'
import Brenha from './views/Brenha.vue'
import Charada from './views/Arcano.vue'
import Cifra from './views/Cifra.vue'
import Esfinge from './views/Esfinge.vue'
import Grifo from './views/Grifo.vue'
import Incognita from './views/Incognita.vue'
import Parabola from './views/Parabola.vue'

// Second Set of Pages
import Empiricism from './views/schools/Empiricism.vue'
import Existential from './views/schools/Existential.vue'




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
      path: '/adivinha',
      name: 'Adivinha',
      component: Adivinha
    },
    {
      path: '/alegoria',
      name: 'alegoria',
      component: Alegoria
    },
    {
      path: '/arcano',
      name: 'arcano',
      component: Arcano
    },
    {
      path: '/brenha',
      name: 'brenha',
      component: Brenha
    },
    {
      path: '/charada',
      name: 'charada',
      component: Charada
    },
    {
      path: '/cifra',
      name: 'cifra',
      component: Cifra
    },
    {
      path: '/esfinge',
      name: 'esfinge',
      component: Esfinge
    },
    {
      path: '/grifo',
      name: 'grifo',
      component: Grifo
    },
    {
      path: '/incognita',
      name: 'incognita',
      component: Incognita
    },
    {
      path: '/parabola',
      name: 'parabola',
      component: Parabola
    },
    {
      path: '/empiricism',
      name: 'empiricism',
      component: Empiricism
    },
    {
      path: '/existential',
      name: 'existential',
      component: Existential
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
