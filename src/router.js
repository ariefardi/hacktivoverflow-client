import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Question from './views/Question.vue'
import AskQuestion from './views/AskQuestion.vue'
import Login from './views/Login.vue'
import Dashboard from './views/Dashboard.vue'
import UpdateQuestion from './views/UpdateQuestion.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/question/:id',
      name: 'question',
      component: Question
    },
    {
      path: '/askquestion',
      name: 'askquestion',
      component: AskQuestion
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/dashboard/:id',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/dashboard/update-question/:id/:index',
      name: 'update-question',
      component: UpdateQuestion
    }
  ]
})
