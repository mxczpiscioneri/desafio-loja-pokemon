import React, { Suspense } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { StylesProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import Routes from './routes'
import Loading from './components/Loading'
import TypeContext, { TypeProvider } from './contexts/type'
import { BackgroundStyled } from './style'
import { getType } from './common/constants/typesOfPokemon'

const App = () => (
  <StylesProvider injectFirst>
    <CssBaseline />
    <TypeProvider>
      <TypeContext.Consumer>
        {context => (
          <BackgroundStyled backgroundColor={getType(context.type).color}>
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
        )}
      </TypeContext.Consumer>
    </TypeProvider>
  </StylesProvider>
)

export default App
