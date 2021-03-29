import { renderHook, act } from '@testing-library/react-hooks'
import { useCart } from './useCart'

describe('useCart hooks', () => {
  test('toggleDrawer', async () => {
    const { result } = renderHook(() => useCart())

    expect(result.current.open).toBe(false)

    act(() => {
      result.current.toggleDrawer(true)
    })

    expect(result.current.open).toBe(true)
  })
})
