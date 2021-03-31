import React from 'react'
import { render } from '@testing-library/react'
import { MuiThemeProvider } from '@material-ui/core'
import { ThemeProvider } from 'styled-components'
import Drawer from '.'
import theme from '../../theme'
import * as PokemonContext from '../../contexts/pokemon'

describe('Drawer components', () => {
  test('Render with success', () => {
    const mockContext = { cart: [] }
    jest
      .spyOn(PokemonContext, 'usePokemonContext')
      .mockImplementation(() => mockContext)

    const component = render(
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <Drawer open={true} toggleDrawer={jest.fn()} />
        </ThemeProvider>
      </MuiThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
