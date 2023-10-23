import { createRouter, createWebHistory } from 'vue-router'
import LoadingView from '/src/views/LoadingView.vue'
import HomeView from '/src/views/HomeView.vue'
import AboutView from '/src/views/AboutView.vue'
import WorkView from '/src/views/WorkView.vue'
import NordikView from '/src/views/cases/NordikView.vue'
import ConcreateView from '/src/views/cases/ConcreateView.vue'
import HitechView from '/src/views/cases/HitechView.vue'
import GamelView from '/src/views/cases/GamelView.vue'
import SkilledView from '/src/views/cases/SkilledView.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'instant',
      }
    }
  },
  routes: [
    {
      path: '/',
      name: 'loading',
      component: LoadingView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/work',
      name: 'work',
      component: WorkView,
    },
    {
      path: '/nordik',
      name: 'nordik',
      component: NordikView
    },
    {
      path: '/concreate',
      name: 'concreate',
      component: ConcreateView
    },
    {
      path: '/hitech',
      name: 'hitech',
      component: HitechView
    },
    {
      path: '/gamel',
      name: 'gamel',
      component: GamelView
    },
    {
      path: '/skilled',
      name: 'skilled',
      component: SkilledView
    }
    
  ]
})


export default router
