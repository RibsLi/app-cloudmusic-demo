import { createRouter, createWebHashHistory } from "vue-router";

const Discovery = () => import('views/discovery/Discovery')
const Podcast = () => import('views/podcast/Podcast')
const Profile = () => import('views/profile/Profile')
const Attention = () => import('views/attention/Attention')
const Cloud = () => import('views/cloud/Cloud')

const routes = [
  {
    path: '',
    redirect: '/discovery'
  },
  {
    path: '/discovery',
    component: Discovery
  },
  {
    path: '/podcast',
    component: Podcast
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/attention',
    component: Attention
  },
  {
    path: '/cloud',
    component: Cloud
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
