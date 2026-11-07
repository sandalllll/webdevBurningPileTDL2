import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Logout from '../views/Logout.vue'
import Signin from '../views/Signin.vue'
import About from '../views/About.vue'
import Main from '../views/Main.vue'

const routes = [
  { path: 'https://sandalllll.github.io/webdevBurningPileTDL2/#/login', name: 'login', component: Login },
  { path: 'https://sandalllll.github.io/webdevBurningPileTDL2/#/logout', name: 'logout', component: Logout },
  { path: 'https://sandalllll.github.io/webdevBurningPileTDL2/#/signin', name: 'signin', component: Signin },
  { path: 'https://sandalllll.github.io/webdevBurningPileTDL2/#/about', name: 'about', component: About },
  { path: 'https://sandalllll.github.io/webdevBurningPileTDL2/#/', name: 'main', component: Main }
]

export const router = createRouter({
  history: createWebHashHistory('/webdevBurningPileTDL2/'),
  routes
})