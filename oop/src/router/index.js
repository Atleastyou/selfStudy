import { createRouter, createWebHistory } from 'vue-router'

const _import = filePath => () => import (`../views/${filePath}.vue`)

const routes = [
  {
    path: '/',
    name: 'index',
    component: _import('index')
  },
  {
    path: '/cate',
    name: 'cate',
    component: _import('cate')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
