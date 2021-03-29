import React, { createContext, useContext } from 'react'
import PropTypes from 'prop-types'
import { useLocalStorage } from '../hooks/useLocalStorage'

const PokemonContext = createContext({})

export const PokemonProvider = ({ children }) => {
  const { storedValue, setValue } = useLocalStorage()

  return (
    <PokemonContext.Provider value={{ type: storedValue.type, setType: setValue }}>
      {children}
    </PokemonContext.Provider>
  )
}

export const usePokemonContext = () => useContext(PokemonContext)

PokemonProvider.propTypes = {
  children: PropTypes.any.isRequired
}

export default PokemonContext
