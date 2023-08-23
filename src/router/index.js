import { createRouter, createWebHistory } from 'vue-router'
import HompePage from '../pages/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HompePage
  },
 


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
