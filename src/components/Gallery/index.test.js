import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { MuiThemeProvider } from '@material-ui/core'
import { ThemeProvider } from 'styled-components'
import Gallery from '.'
import mockDetailsPokemon from '../../assets/mock-data/details-pokemon.json'
import theme from '../../theme'
import * as PokemonContext from '../../contexts/pokemon'
import { paths } from '../../routes'

const mockHistory = jest.fn()
jest.mock('../../hooks/usePokemon')
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistory
  })
}))

describe('Gallery components', () => {
  test('Render with success', () => {
    const component = render(
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <Gallery list={[mockDetailsPokemon]} loading={true} paginate={jest.fn()} />
        </ThemeProvider>
      </MuiThemeProvider>
    )

    fireEvent.mouseOver(screen.getByAltText('bulbasaur'))
    fireEvent.mouseOut(screen.getByAltText('bulbasaur'))

    expect(component).toMatchSnapshot()
  })

  test('Render without pokemon', () => {
    const component = render(
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <Gallery list={[]} loading={true} paginate={jest.fn()} />
        </ThemeProvider>
      </MuiThemeProvider>
    )

    expect(component).toMatchSnapshot()
  })

  test('click button load more', () => {
    const mockPaginate = jest.fn()

    render(
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <Gallery list={[mockDetailsPokemon]} loading={true} paginate={mockPaginate} />
        </ThemeProvider>
      </MuiThemeProvider>
    )

    fireEvent.click(screen.getByTestId('btnLoadMore'))

    expect(mockPaginate).toBeCalled()
  })

  test('click button add cart', () => {
    const mockFunc = jest.fn()
    const mockContext = { addCart: mockFunc }
    jest
      .spyOn(PokemonContext, 'usePokemonContext')
      .mockImplementation(() => mockContext)

    render(
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <Gallery list={[mockDetailsPokemon]} loading={true} paginate={jest.fn()} />
        </ThemeProvider>
      </MuiThemeProvider>
    )

    fireEvent.click(screen.getByTestId('btnAddCart'))

    expect(mockFunc).toBeCalled()
  })

  test('click card to view details', () => {
    const mockContext = { addCart: jest.fn() }
    jest
      .spyOn(PokemonContext, 'usePokemonContext')
      .mockImplementation(() => mockContext)

    render(
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <Gallery list={[mockDetailsPokemon]} loading={false} />
        </ThemeProvider>
      </MuiThemeProvider>
    )

    fireEvent.click(screen.getByTestId('btnViewDetails'))

    expect(mockHistory).toBeCalledWith(paths.details.replace(':name', mockDetailsPokemon.name))
  })
})
