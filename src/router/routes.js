import SignInPage from '../components/SignIn'
import SignUpPage from '../components/SignUp.vue'
import Error404 from '../components/Error404.vue'
import Dashboard from '../components/Dashboard.vue'
import MyLayout from 'layouts/MyLayout.vue'
import Index from 'pages/Index.vue'

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
