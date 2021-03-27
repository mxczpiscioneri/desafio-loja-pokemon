import { lazy } from 'react'
import Constants from '../common/constants'

const Home = lazy(() => import('../containers/Home'))

export const paths = {
  home: `/${Constants.base_path}`,
  type: `/${Constants.base_path}/types/:type`
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
  }
]

export default routes
