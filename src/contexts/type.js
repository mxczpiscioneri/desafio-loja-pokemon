import React, { createContext, useContext } from 'react'
import PropTypes from 'prop-types'
import { useLocalStorage } from '../hooks/useLocalStorage'

const TypeContext = createContext({})

export const TypeProvider = ({ children }) => {
  const { storedValue, setValue } = useLocalStorage()

  return (
    <TypeContext.Provider value={{ type: storedValue.type, setType: setValue }}>
      {children}
    </TypeContext.Provider>
  )
}

export const useTypeContext = () => useContext(TypeContext)

TypeProvider.propTypes = {
  children: PropTypes.any.isRequired
}

export default TypeContext
