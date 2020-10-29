import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/accordion',
    name: 'Accordion',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SelectInputType.vue'),
    props: true
  },
  {
    path: '/accordion/:type',
    name: 'Accordion',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AccordionView.vue'),
    props: true
  },
  {
    path: '/full',
    name: 'Full',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/FullLayoutView.vue')
  },
  {
    path: '/sandbox',
    name: 'Sandbox',
    component: () => import(/* webpackChunkName: "about" */ '../views/Sandbox.vue')
  },
  {
    path: '/item/:type/:id',
    name: 'Item',
    component: () => import(/* webpackChunkName: "about" */ '../components/Item.vue'),
    props: true
  }
]

const router = new VueRouter({
  routes
})

export default router
