import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Adivinha from './views/Adivinha.vue'
import Alegoria from './views/Alegoria.vue'
import Arcano from './views/Arcano.vue'
import Brenha from './views/Brenha.vue'
import Charada from './views/Arcano.vue'
import Cifra from './views/Cifra.vue'
import Enigma from './views/Enigma.vue'
import Esfinge from './views/Esfinge.vue'
import Grifo from './views/Grifo.vue'
import Incognita from './views/Incognita.vue'
import Parabola from './views/Parabola.vue'
import Perplexidade from './views/Perplexity.vue'

// Second Set of Pages
import Empiricism from './views/schools/Empiricism.vue'
import Existential from './views/schools/Existential.vue'
import Hegelian from './views/schools/Hegel.vue'
import Idealism from './views/schools/Ideal.vue'
import Kant from './views/schools/Kant.vue'
import Marx from './views/schools/Marx.vue'
import Positivism from './views/schools/Positivism.vue'
import Pragmaticism from './views/schools/Pragmaticism.vue'
import Realism from './views/schools/Realism.vue'
import Phenomenology from './views/schools/Phenomenology.vue'
import Platonism from './views/schools/Platonism.vue'

Vue.use(Router)

//  And Now We Route Our Troute

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
      path: '/enigma',
      name: 'enigma',
      component: Enigma
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
      path: '/perplexidade',
      name: 'perplexidade',
      component: Perplexidade
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
      path: '/hegelian',
      name: 'hegelian',
      component: Hegelian
    },
    {
      path: '/idealism',
      name: 'Idealism',
      component: Idealism
    },
    {
      path: '/kant',
      name: 'Kantian',
      component: Kant
    },
    {
      path: '/marxism',
      name: 'Marxism',
      component: Marx
    },
    {
      path: '/phenomenology',
      name: 'Phenomenology',
      component: Phenomenology
    },
    {
      path: '/pragmaticism',
      name: 'Pragmaticism',
      component: Pragmaticism
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
