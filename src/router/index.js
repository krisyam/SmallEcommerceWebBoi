import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue';
import Item from '@/views/ItemDetails.vue';
import Cart from '@/views/Cart.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/item/:name',
    name: 'Item',
    component: Item
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
