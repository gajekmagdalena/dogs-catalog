import { createMemoryHistory, createRouter } from 'vue-router'
import DogsCatalog from '@/views/DogsCatalog.vue'
import FavouriteDogs from '@/views/FavouriteDogs.vue'

const routes = [
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
const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router
