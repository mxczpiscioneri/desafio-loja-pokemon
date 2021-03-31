import { lazy } from 'react'

const Home = lazy(() => import('../containers/Home'))
const Details = lazy(() => import('../containers/Details'))

export const paths = {
  home: '/',
  type: '/types/:type',
  details: '/pokemon/:name'
}

const routes = [
  {
    path: paths.home,
    component: Home,
    exact: true
  },
  {
    path: paths.type,
    component: Home,
    exact: true
  },
  {
    path: paths.details,
    component: Details,
    exact: true
  }
]

export default routes
