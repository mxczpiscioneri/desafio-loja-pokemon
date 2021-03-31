import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { MuiThemeProvider } from '@material-ui/core'
import { ThemeProvider } from 'styled-components'
import Details from '.'
import mockDetailsPokemon from '../../assets/mock-data/details-pokemon.json'
import theme from '../../theme'
import * as PokemonContext from '../../contexts/pokemon'
import { usePokemon } from '../../hooks/usePokemon'

jest.mock('../../hooks/usePokemon')

const containerComponent = (
  <MuiThemeProvider theme={theme}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Details />
      </BrowserRouter>
    </ThemeProvider>
  </MuiThemeProvider>
)

describe('Details container', () => {
  test('Render layout', () => {
    const mockHooks = {
      loading: true,
      data: [mockDetailsPokemon],
      error: false,
      searchPokemon: jest.fn()
    }
    usePokemon.mockReturnValue(mockHooks)

    const component = render(containerComponent)

    expect(component).toMatchSnapshot()
  })

  test('Render with error', () => {
    const mockHooks = {
      loading: false,
      data: [],
      error: true,
      searchPokemon: jest.fn()
    }
    usePokemon.mockReturnValue(mockHooks)

    const component = render(containerComponent)

    expect(component).toMatchSnapshot()
  })

  test('click button add cart', () => {
    const mockFunc = jest.fn()
    const mockContext = { addCart: mockFunc }
    jest
      .spyOn(PokemonContext, 'usePokemonContext')
      .mockImplementation(() => mockContext)

    const mockHooks = {
      loading: true,
      data: [mockDetailsPokemon],
      error: false,
      searchPokemon: jest.fn()
    }
    usePokemon.mockReturnValue(mockHooks)

    render(containerComponent)

    fireEvent.click(screen.getByTestId('btnAddCart'))

    expect(mockFunc).toBeCalled()
  })
})
