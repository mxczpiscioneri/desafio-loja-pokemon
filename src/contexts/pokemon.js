import React, { createContext, useContext } from 'react'
import PropTypes from 'prop-types'
import { keys, useLocalStorage } from '../hooks/useLocalStorage'

const PokemonContext = createContext({})

export const PokemonProvider = ({ children }) => {
  const { storedValue, setValue } = useLocalStorage()

  const setType = (type) => {
    setValue(keys.type, type)
  }

  const addCart = (pokemon) => {
    const listPokemon = JSON.parse(storedValue.cart)
    listPokemon.push(pokemon)

    setValue(keys.cart, JSON.stringify(listPokemon))
  }

  const removeCart = (index) => {
    const listPokemon = JSON.parse(storedValue.cart)
    const newListPokemon = listPokemon.filter((_, i) => i !== index)

    setValue(keys.cart, JSON.stringify(newListPokemon))
  }

  return (
    <PokemonContext.Provider value={{
      type: storedValue.type,
      setType,
      cart: JSON.parse(storedValue.cart),
      addCart,
      removeCart }}
    >
      {children}
    </PokemonContext.Provider>
  )
}

export const usePokemonContext = () => useContext(PokemonContext)

PokemonProvider.propTypes = {
  children: PropTypes.any.isRequired
}

export default PokemonContext
