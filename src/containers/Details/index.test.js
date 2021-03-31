import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import Details from '.'
import mockDetailsPokemon from '../../assets/mock-data/details-pokemon.json'
import * as PokemonContext from '../../contexts/pokemon'
import { usePokemon } from '../../hooks/usePokemon'

jest.mock('../../hooks/usePokemon')

const containerComponent = (
  <BrowserRouter>
    <Details />
  </BrowserRouter>
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
