import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import jobs from '../views/jobs.vue'
import JobDetails from '../views/JobDetails.vue'
import Notfound from '../views/Notfound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
   
    component: About
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: jobs
  },

  {
    path: '/jobs/:id',
    name: 'JobDetails',
    component: JobDetails,

  },

  //redirect 
  {
    path: '/alljobs',
    redirect: '/jobs',

  },


  {

    path: '/:catchAll(.*)',
    name: 404,
    component: Notfound
    

   

  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router