import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Gallery from '.'
import mockDetailsPokemon from '../../assets/mock-data/details-pokemon.json'

jest.mock('../../hooks/usePokemon')

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
})
