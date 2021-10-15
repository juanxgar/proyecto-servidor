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
    path: '/registroinventario',
    name: 'RegistroInventario',
    component: () => import('../views/RegistroInventario.vue')
  },
  {
    path: '/tabla',
    name: 'Tabla',
    component: () => import('../views/Tabla.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/acernitro5',
    name: 'AcerNitro5',
    component: () => import('../views/acerNitro5.vue')
  },
  {
    path: '/asus',
    name: 'Asus',
    component: () => import('../views/asus.vue')
  },
  {
    path: '/diademajbl',
    name: 'DiademaJBL',
    component: () => import('../views/diademaJBL.vue')
  },
  {
    path: '/googlehome',
    name: 'GoogleHome',
    component: () => import('../views/googleHome.vue')
  },
  {
    path: '/hpgamer',
    name: 'HPGamer',
    component: () => import('../views/hpGamer.vue')
  },
  {
    path: '/kaspersky',
    name: 'Kaspersky',
    component: () => import('../views/kaspersky.vue')
  },
  {
    path: '/mcafee',
    name: 'McAfee',
    component: () => import('../views/mcAfee.vue')
  },
  {
    path: '/mesar3',
    name: 'MesaR3',
    component: () => import('../views/MesaR3.vue')
  },
  {
    path: '/mesar5',
    name: 'MesaR5',
    component: () => import('../views/MesaR5.vue')
  },
  {
    path: '/mesar7',
    name: 'MesaR7',
    component: () => import('../views/MesaR7.vue')
  },
  {
    path: '/office365',
    name: 'Office365',
    component: () => import('../views/Office365.vue')
  },
  {
    path: '/win10',
    name: 'Win10',
    component: () => import('../views/win10.vue')
  },
  {
    path: '/paginaProducto',
    name: 'PaginaProducto',
    component: () => import('../views/paginaProducto.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
