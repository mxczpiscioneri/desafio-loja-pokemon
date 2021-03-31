import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Gallery from '.'
import mockDetailsPokemon from '../../assets/mock-data/details-pokemon.json'
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
      <Gallery list={[mockDetailsPokemon]} loading={true} paginate={jest.fn()} />
    )

    fireEvent.mouseOver(screen.getByAltText('bulbasaur'))
    fireEvent.mouseOut(screen.getByAltText('bulbasaur'))

    expect(component).toMatchSnapshot()
  })

  test('Render without pokemon', () => {
    const component = render(
      <Gallery list={[]} loading={true} paginate={jest.fn()} />
    )

    expect(component).toMatchSnapshot()
  })

  test('click button load more', () => {
    const mockPaginate = jest.fn()

    render(
      <Gallery list={[mockDetailsPokemon]} loading={true} paginate={mockPaginate} />
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
      <Gallery list={[mockDetailsPokemon]} loading={true} paginate={jest.fn()} />
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
      <Gallery list={[mockDetailsPokemon]} loading={false} />
    )

    fireEvent.click(screen.getByTestId('btnViewDetails'))

    expect(mockHistory).toBeCalledWith(paths.details.replace(':name', mockDetailsPokemon.name))
  })
})
