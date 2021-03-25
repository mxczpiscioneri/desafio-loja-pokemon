import { lazy } from 'react'
import Constants from '../common/constants'

const Home = lazy(() => import('../containers/Home'))

const routes = [
  {
    path: `/${Constants.base_path}`,
    component: Home,
    exact: true
  }
]

export default routes
