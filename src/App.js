import React, { Suspense } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { StylesProvider } from '@material-ui/core/styles'
import Routes from './routes'
import Loading from './components/Loading'

const App = () => (
  <StylesProvider>
    <Suspense fallback={<Loading backdrop={false} />}>
      <BrowserRouter>
        <Switch>
          {Routes.map(route => (
            <Route key={route.path} path={route.path} exact={route.exact} component={route.component} />
          ))}
        </Switch>
      </BrowserRouter>
    </Suspense>
  </StylesProvider>
)

export default App
