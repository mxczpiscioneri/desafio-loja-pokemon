import { lazy } from 'react'
import Constants from '../common/constants'

const Home = lazy(() => import('../containers/Home'))
const Details = lazy(() => import('../containers/Details'))

export const paths = {
  home: `/${Constants.base_path}`,
  type: `/${Constants.base_path}/types/:type`,
  details: `/${Constants.base_path}/pokemon/:name`
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
