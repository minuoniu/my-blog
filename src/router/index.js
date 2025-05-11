import { createRouter, createWebHistory } from 'vue-router'



// 自动引入路由
const modules = import.meta.glob('../views/*.vue')
const routes = []
for (const file in modules) {
  const path = file.replace('../views/', '').replace('.vue', '').toLowerCase()
  routes.push({
    path: '/' + path,
    name: path,
    component: modules[file],
  })
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // 首页重定向
    {
      path: '/',
      redirect: '/homeview'
    },
    ...routes
  ]
})

export default router
