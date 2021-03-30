import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Cart from '.'
import * as PokemonContext from '../../contexts/pokemon'
import mockDetailsPokemon from '../../assets/mock-data/details-pokemon.json'

describe('Cart components', () => {
  test('Render with success', () => {
    const mockContext = { cart: [mockDetailsPokemon] }
    jest
      .spyOn(PokemonContext, 'usePokemonContext')
      .mockImplementation(() => mockContext)

    const component = render(<Cart />)
    expect(component).toMatchSnapshot()
  })

  test('Render without pokemon', () => {
    const mockContext = { cart: [] }
    jest
      .spyOn(PokemonContext, 'usePokemonContext')
      .mockImplementation(() => mockContext)

    const component = render(<Cart />)
    expect(component).toMatchSnapshot()
  })

  test('remove pokemon', () => {
    const mockFunc = jest.fn()
    const mockContext = { cart: [mockDetailsPokemon], removeCart: mockFunc }
    jest
      .spyOn(PokemonContext, 'usePokemonContext')
      .mockImplementation(() => mockContext)

    render(<Cart />)

    fireEvent.click(screen.getByLabelText('deletar'))

    expect(mockFunc).toBeCalled()
  })
})
