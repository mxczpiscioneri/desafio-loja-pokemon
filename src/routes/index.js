import { lazy } from 'react'
import { homepage } from '../../package.json'

const path = homepage.split('/').pop()
const Home = lazy(() => import('../containers/Home'))

const routes = [
  {
    path: `/${path}`,
    component: Home,
    exact: true
  }
]

export default routes
