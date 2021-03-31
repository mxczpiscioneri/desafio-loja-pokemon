import React from 'react'
import { act, fireEvent, render, screen } from '@testing-library/react'
import { MuiThemeProvider } from '@material-ui/core'
import { ThemeProvider } from 'styled-components'
import Cart from '.'
import * as PokemonContext from '../../contexts/pokemon'
import mockDetailsPokemon from '../../assets/mock-data/details-pokemon.json'
import theme from '../../theme'

window.scrollTo = jest.fn()

const containerComponent = (
  <MuiThemeProvider theme={theme}>
    <ThemeProvider theme={theme}>
      <Cart />
    </ThemeProvider>
  </MuiThemeProvider>
)

describe('Cart components', () => {
  test('Render with success', () => {
    const mockContext = { cart: [mockDetailsPokemon] }
    jest
      .spyOn(PokemonContext, 'usePokemonContext')
      .mockImplementation(() => mockContext)

    const component = render(containerComponent)
    expect(component).toMatchSnapshot()
  })

  test('Render without pokemon', () => {
    const mockContext = { cart: [] }
    jest
      .spyOn(PokemonContext, 'usePokemonContext')
      .mockImplementation(() => mockContext)

    const component = render(containerComponent)
    expect(component).toMatchSnapshot()
  })

  test('remove pokemon', () => {
    const mockFunc = jest.fn()
    const mockContext = { cart: [mockDetailsPokemon], removeCart: mockFunc }
    jest
      .spyOn(PokemonContext, 'usePokemonContext')
      .mockImplementation(() => mockContext)

    render(containerComponent)

    fireEvent.click(screen.getByLabelText('deletar'))

    expect(mockFunc).toBeCalled()
  })

  test('clear cart', async () => {
    const mockFunc = jest.fn()
    const mockContext = { cart: [mockDetailsPokemon], clearCart: mockFunc }
    jest
      .spyOn(PokemonContext, 'usePokemonContext')
      .mockImplementation(() => mockContext)

    render(containerComponent)

    await act(async () => {
      fireEvent.click(screen.getByTestId('btnFinish'))

      fireEvent.click(screen.getByText('Concluir pedido'))
    })

    expect(mockFunc).toBeCalled()
  })

  test('cancel checkout', () => {
    const mockFunc = jest.fn()
    const mockContext = { cart: [mockDetailsPokemon], clearCart: mockFunc }
    jest
      .spyOn(PokemonContext, 'usePokemonContext')
      .mockImplementation(() => mockContext)

    render(containerComponent)

    act(() => {
      fireEvent.click(screen.getByTestId('btnFinish'))

      fireEvent.click(screen.getByText('Voltar'))
    })

    expect(mockFunc).not.toBeCalled()
  })
})
