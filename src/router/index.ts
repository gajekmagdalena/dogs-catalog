import { createRouter, createWebHistory } from 'vue-router'
import DogsCatalog from '@/views/DogsCatalog.vue'
import FavouriteDogs from '@/views/FavouriteDogs.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'DogsCatalog',
      component: DogsCatalog
    },
    {
      path: '/favourites-dogs',
      name: 'FavouritesDogs',
      component: FavouriteDogs
    }
  ]
})

export default router
