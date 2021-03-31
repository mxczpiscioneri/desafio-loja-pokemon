import React from 'react'
import { keys } from '../hooks/useLocalStorage'
import { PokemonProvider as pokemonProvider } from './pokemon'

const mockFn = jest.fn()
jest.mock('../hooks/useLocalStorage', () => ({
  ...jest.requireActual('../hooks/useLocalStorage'),
  useLocalStorage: () => ({
    storedValue: { cart: '[]', type: 'all' },
    setValue: mockFn
  })
}))
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: jest.fn()
  })
}))
const mockSetState = jest.fn();
jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: initial => [initial, mockSetState]
}));

describe('PokemonContext', () => {
  test('setType', () => {
    const provider = pokemonProvider(<p>test</p>)

    provider.props.value.setType('test')

    expect(mockFn).toBeCalledWith(keys.type, 'test')
  })

  test('addCart', () => {
    const obj = { id: 1 }
    const provider = pokemonProvider(<p>test</p>)

    provider.props.value.addCart(obj)

    expect(mockFn).toBeCalledWith(keys.cart, JSON.stringify([obj]))
  })

  test('removeCart', () => {
    const provider = pokemonProvider(<p>test</p>)

    provider.props.value.removeCart({ id: 1 })

    expect(mockFn).toBeCalledWith(keys.cart, JSON.stringify([]))
  })

  test('clearCart', () => {
    const provider = pokemonProvider(<p>test</p>)

    provider.props.value.clearCart()

    expect(mockFn).toBeCalledWith(keys.cart, JSON.stringify([]))
  })

  test('toggleDrawer', () => {
    const provider = pokemonProvider(<p>test</p>)

    provider.props.value.toggleDrawer()

    expect(mockSetState).toBeCalled()
  })
})
