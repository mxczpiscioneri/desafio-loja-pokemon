import { act, renderHook } from '@testing-library/react-hooks'
import { keys, useLocalStorage } from './useLocalStorage'

describe('useLocalStorage hooks', () => {
  test('initial values', async () => {
    const { result } = renderHook(() => useLocalStorage())

    expect(result.current.storedValue).toStrictEqual({ type: 'all' })
  })

  test('setValue', async () => {
    const { result } = renderHook(() => useLocalStorage())

    act(() => {
      result.current.setValue(keys.type, 'test')
    })

    expect(result.current.storedValue).toStrictEqual({ type: 'test' })
  })
})
