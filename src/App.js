import React, { Suspense } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { StylesProvider } from '@material-ui/core/styles'
import { CssBaseline, MuiThemeProvider } from '@material-ui/core'
import { ThemeProvider } from 'styled-components'
import Routes from './routes'
import Loading from './components/Loading'
import PokemonContext, { PokemonProvider } from './contexts/pokemon'
import theme from './theme'
import { BackgroundStyled } from './style'
import { getType } from './common/constants/typesOfPokemon'

const App = () => (
  <StylesProvider injectFirst>
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <PokemonProvider>
          <PokemonContext.Consumer>
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
          </PokemonContext.Consumer>
        </PokemonProvider>
      </ThemeProvider>
    </MuiThemeProvider>
  </StylesProvider>
)

export default App
