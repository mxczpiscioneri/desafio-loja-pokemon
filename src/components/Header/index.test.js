import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { MuiThemeProvider } from '@material-ui/core'
import { ThemeProvider } from 'styled-components'
import Header from '.'
import theme from '../../theme'
import * as PokemonContext from '../../contexts/pokemon'
import { paths } from '../../routes'

const mockHistory = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistory
  })
}))

beforeEach(() => {
  const mockContext = { type: 'all', cart: [] }
  jest
    .spyOn(PokemonContext, 'usePokemonContext')
    .mockImplementation(() => mockContext)
})

describe('Header components', () => {
  const renderComponent = () => render(
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    </MuiThemeProvider>
  )

  test('Render with success', () => {
    expect(renderComponent()).toMatchSnapshot()
  })

  test('search pokemon with success', () => {
    renderComponent()

    const input = screen.getByPlaceholderText('Procurar...')

    fireEvent.change(input, { target: [{ value: 'bulbasaur' }] })

    fireEvent.submit(input)

    expect(mockHistory).toBeCalledWith(paths.details.replace(':name', 'bulbasaur'))
  })

  test('search pokemon empty', () => {
    renderComponent()

    const input = screen.getByPlaceholderText('Procurar...')

    fireEvent.change(input, { target: [{ value: '' }] })

    fireEvent.submit(input)

    expect(mockHistory).not.toBeCalled()
  })
})
