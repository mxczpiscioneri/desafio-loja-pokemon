import { useState } from 'react'

export const keys = { type: { slug: 'type', value: 'POKEMON@TYPE' } }

export const useLocalStorage = () => {
  const [storedValue, setStoredValue] = useState(() => {
    let stored = null
    try {
      const typeSaved = window.localStorage.getItem(keys.type.value) || 'all'
      stored = { type: typeSaved }
    } catch (error) { }
    return stored
  })

  const setValue = (key, value) => {
    try {
      setStoredValue({ [keys[key.slug].slug]: value })
      window.localStorage.setItem(key.value, value)
    } catch (error) { }
  }

  return {
    storedValue,
    setValue
  }
}
