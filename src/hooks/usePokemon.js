/* eslint complexity: ["error", 5] */

import { useState, useCallback } from 'react'
import PokeApiService from '../services/pokeapi'

export const usePokemon = () => {
  const limit = 24
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [data, setData] = useState([])
  const [offset, setOffset] = useState(0)

  const paginate = () => {
    setOffset(offsetCurrent => offsetCurrent + limit)
  }

  const getPokemonDetail = async (pokemons, type) => {
    const pokemonListDetails = await Promise.all(
      pokemons.map(async (item) => {
        try {
          const responseDetails = await PokeApiService.getDetails(type ? item.pokemon.url : item.url)
          return responseDetails && responseDetails.data
        } catch (exception) {
          return {}
        }
      })
    )

    return pokemonListDetails
  }

  const getAllPokemon = useCallback(async (type) => {
    try {
      setError(false)
      setLoading(true)

      let responseList
      if (type) {
        setData([])
        const response = await PokeApiService.getType(type)
        responseList = response.data.pokemon
      } else {
        const response = await PokeApiService.getAll(offset, limit)
        responseList = response.data.results
      }

      let responseDetails = await getPokemonDetail(responseList, !!type)
      responseDetails = responseDetails.filter(value => Object.keys(value).length !== 0)

      setData(dataCurrent => dataCurrent.concat(responseDetails))
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setData([])
      } else {
        setError(true)
      }
    } finally {
      setLoading(false)
    }
  }, [offset])

  return {
    loading,
    data,
    error,
    setError,
    offset,
    paginate,
    getAllPokemon
  }
}
