import React, { Suspense } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { StylesProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import Routes from './routes'
import Loading from './components/Loading'
import { BackgroundStyled } from './style'

const App = () => (
  <StylesProvider injectFirst>
    <CssBaseline />
    <BackgroundStyled>
      <Suspense fallback={<Loading backdrop={false} />}>
        <BrowserRouter>
          <Switch>
            {Routes.map(route => (
              <Route key={route.path} path={route.path} exact={route.exact} component={route.component} />
            ))}
          </Switch>
        </BrowserRouter>
      </Suspense>
    </BackgroundStyled>
  </StylesProvider>
)

export default App
