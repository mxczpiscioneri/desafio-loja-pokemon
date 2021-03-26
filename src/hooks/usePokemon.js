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

  const getPokemonDetail = async (pokemons) => {
    const pokemonListDetails = await Promise.all(
      pokemons.map(async ({ url }) => {
        try {
          const responseDetails = await PokeApiService.getDetails(url)
          return responseDetails && responseDetails.data
        } catch (exception) {
          return {}
        }
      })
    )

    return pokemonListDetails
  }

  const getAllPokemon = useCallback(async () => {
    try {
      setError(false)
      setLoading(true)

      const responseList = await PokeApiService.getAll(offset, limit)
      let responseDetails = await getPokemonDetail(responseList.data.results)
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
