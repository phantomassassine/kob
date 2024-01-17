import { createRouter, createWebHistory } from 'vue-router'
import pkIndexView from '../views/pk/pkIndexView'
import recordIndexView from '../views/record/recordIndexView'
import ranklistIndexView from '../views/ranklist/ranklistIndexView'
import userbotIndexView from '../views/user/bot/userbotIndexView'
import NotFound from '../views/error/NotFound'

const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/pk/"
  },
  {
    path: "/pk/",
    name: "pk_index",
    component:pkIndexView,
  }, 
  {
    path: "/record/",
    name: "record_index",
    component:recordIndexView,
  }, 
  {
    path: "/ranklist/",
    name: "ranklist_index",
    component:ranklistIndexView,
  }, 
  {
    path: "/user/bot/",
    name: "user_bot_index",
    component:userbotIndexView,
  }, 
  {
    path: "/404/",
    name: "404",
    component:NotFound,
  }, 
  {
    path: "/:catchAll(.*)",
    redirect: "/404/"
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
