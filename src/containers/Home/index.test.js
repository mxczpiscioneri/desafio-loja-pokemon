import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { MuiThemeProvider } from '@material-ui/core'
import { ThemeProvider } from 'styled-components'
import Home from '.'
import mockDetailsPokemon from '../../assets/mock-data/details-pokemon.json'
import theme from '../../theme'
import { usePokemon } from '../../hooks/usePokemon'

jest.mock('../../hooks/usePokemon')

const containerComponent = (
  <MuiThemeProvider theme={theme}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </ThemeProvider>
  </MuiThemeProvider>
)

describe('Home container', () => {
  test('Render layout', () => {
    const mockHooks = {
      loading: true,
      data: [mockDetailsPokemon],
      error: false,
      setError: jest.fn(),
      offset: 0,
      paginate: jest.fn(),
      getAllPokemon: jest.fn()
    }
    usePokemon.mockReturnValue(mockHooks)

    const component = render(containerComponent)

    fireEvent.mouseOver(screen.getByAltText('bulbasaur'))
    fireEvent.mouseOut(screen.getByAltText('bulbasaur'))

    expect(component).toMatchSnapshot()
  })

  test('Render without pokemon', () => {
    const mockHooks = {
      loading: false,
      data: [],
      error: false,
      setError: jest.fn(),
      offset: 0,
      paginate: jest.fn(),
      getAllPokemon: jest.fn()
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
      setError: jest.fn(),
      offset: 0,
      paginate: jest.fn(),
      getAllPokemon: jest.fn()
    }
    usePokemon.mockReturnValue(mockHooks)

    const component = render(containerComponent)

    expect(component).toMatchSnapshot()
  })
})
