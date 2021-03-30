import { useState } from 'react'

export const keys = {
  type: { slug: 'type', value: 'POKEMON@TYPE' },
  cart: { slug: 'cart', value: 'POKEMON@CART' }
}

export const useLocalStorage = () => {
  const [storedValue, setStoredValue] = useState(() => {
    let stored = null
    try {
      const typeSaved = window.localStorage.getItem(keys.type.value) || 'all'
      const cartSaved = window.localStorage.getItem(keys.cart.value) || '[]'
      stored = { type: typeSaved, cart: cartSaved }
    } catch (error) { }
    return stored
  })

  const setValue = (key, value) => {
    try {
      setStoredValue(oldValue => ({ ...oldValue, [keys[key.slug].slug]: value }))
      window.localStorage.setItem(key.value, value)
    } catch (error) { }
  }

  return {
    storedValue,
    setValue
  }
}
