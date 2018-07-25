import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Question from './views/Question.vue'
import AskQuestion from './views/AskQuestion.vue'
import Login from './views/Login.vue'

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
      path: '/question',
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
    }
  ]
})
