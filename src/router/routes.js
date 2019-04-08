import SignInPage from 'pages/SignInPage.vue'
import SignUpPage from 'pages/SignUpPage.vue'
import Error404 from 'pages/Error404.vue'
import Dashboard from 'pages/Dashboard.vue'
import MyLayout from 'layouts/MyLayout.vue'
import Index from 'pages/Index.vue'
import Profile from 'pages/Profile.vue'

const routes = [
  {
    path: '/',
    component: MyLayout,
    children: [{ path: '', component: Index }]
  },
  {
    path: '/',
    component: MyLayout,
    children: [{ path: '/dashboard', component: Dashboard }],
    meta: { requiresAuth: true }
  },
  {
    path: '/',
    component: MyLayout,
    children: [{ path: '/sign-in', component: SignInPage }]
  },
  {
    path: '/',
    component: MyLayout,
    children: [{ path: '/sign-up', component: SignUpPage }]
  },
  {
    path: '/',
    component: MyLayout,
    children: [{ path: '/profile', component: Profile }]
  },
  {
    path: '/',
    component: MyLayout,
    children: [{ path: '/404', component: Error404 }]
  },
  {
    path: '/',
    component: MyLayout,
    children: [{ path: '*', component: Error404 }]
  },
  {
    path: '*',
    redirect: '/404'
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
