import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import Home from '.'
import { usePokemon } from '../../hooks/usePokemon'
import mockDetailsPokemon from '../../assets/mock-data/details-pokemon.json'

jest.mock('../../hooks/usePokemon')

const containerComponent = (
  <BrowserRouter>
    <Home />
  </BrowserRouter>
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
