// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../View/HomePage.vue';
import AboutPage from "../View/AboutPage.vue"
import ContactUsPage from "../View/ContactUsPage.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactUsPage
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
