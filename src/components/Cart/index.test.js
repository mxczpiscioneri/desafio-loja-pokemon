import React from 'react'
import { render } from '@testing-library/react'
import Cart from '.'
import mockDetailsPokemon from '../../assets/mock-data/details-pokemon.json'

describe('Cart components', () => {
  test('Render with success', () => {
    const component = render(<Cart resume={[ { ...mockDetailsPokemon } ]} />)
    expect(component).toMatchSnapshot()
  })

  test('Render without pokemon', () => {
    const component = render(<Cart resume={[]} />)
    expect(component).toMatchSnapshot()
  })
})
