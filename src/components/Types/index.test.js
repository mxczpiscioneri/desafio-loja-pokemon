import React from 'react'
import { render } from '@testing-library/react'
import Types from '.'
import mockDetailsPokemon from '../../assets/mock-data/details-pokemon.json'

describe('Types components', () => {
  test('Render with success', () => {
    const component = render(<Types data={mockDetailsPokemon.types} colapse={false} />)
    expect(component).toMatchSnapshot()
  })

  test('Render colapse with success', () => {
    const component = render(<Types data={mockDetailsPokemon.types} colapse={true} />)
    expect(component).toMatchSnapshot()
  })
})
