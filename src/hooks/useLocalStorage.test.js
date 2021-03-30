import { act, renderHook } from '@testing-library/react-hooks'
import { keys, useLocalStorage } from './useLocalStorage'
import mockDetailsPokemon from '../assets/mock-data/details-pokemon.json'

describe('useLocalStorage hooks', () => {
  test('initial values', async () => {
    const { result } = renderHook(() => useLocalStorage())

    expect(result.current.storedValue).toStrictEqual({ cart: '[]', type: 'all' })
  })

  test('setValue type', async () => {
    const { result } = renderHook(() => useLocalStorage())

    act(() => {
      result.current.setValue(keys.type, 'test')
    })

    expect(result.current.storedValue).toStrictEqual({ cart: '[]', type: 'test' })
  })

  test('setValue cart', async () => {
    const { result } = renderHook(() => useLocalStorage())

    act(() => {
      result.current.setValue(keys.cart, JSON.stringify(mockDetailsPokemon))
    })

    expect(result.current.storedValue).toStrictEqual({ cart: JSON.stringify(mockDetailsPokemon), type: 'test' })
  })
})
