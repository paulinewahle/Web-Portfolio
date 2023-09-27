import { createRouter, createWebHistory } from 'vue-router'
import LoadingView from '/src/views/LoadingView.vue'
import HomeView from '/src/views/HomeView.vue'
import AboutView from '/src/views/AboutView.vue'
import WorkView from '/src/views/WorkView.vue'
import ConcreateView from '/src/views/cases/ConcreateView.vue'
import BaioView from '/src/views/cases/BaioView.vue'
import NioginView from '/src/views/cases/NioginView.vue'
import HitechView from '/src/views/cases/HitechView.vue'
import GamelView from '/src/views/cases/GamelView.vue'
import SkilledView from '/src/views/cases/SkilledView.vue'
import StickyprojectsView from '/src/views/cases/StickyprojectsView.vue'
import TodoView from '/src/views/cases/TodoView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
      path: '/concreate',
      name: 'concreate',
      component: ConcreateView
    },
    {
      path: '/baio',
      name: 'baio',
      component: BaioView
    },
    {
      path: '/niogin',
      name: 'niogin',
      component: NioginView
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
    },
    {
      path: '/stickyprojects',
      name: 'stickyprojects',
      component: StickyprojectsView
    },
    {
      path: '/todo',
      name: 'todo',
      component: TodoView
    },
    
  ]
})


export default router
