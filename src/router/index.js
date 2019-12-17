import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import contact from '../views/Contact.vue'
import Post from '../views/Post.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/create',
    name: 'create',
    // ここのコンポーネントは単数形
    component: () => import('../views/Create.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: contact
  },
  {
    path: '/Post/:uid/:id',
    name: 'Post',
    component: Post
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
