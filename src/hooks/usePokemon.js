import { useState, useCallback } from 'react'
import PokeApiService from '../services/pokeapi'

export const usePokemon = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [data, setData] = useState([])

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

      const responseList = await PokeApiService.getAll(0, 60)
      let responseDetails = await getPokemonDetail(responseList.data.results)
      responseDetails = responseDetails.filter(value => Object.keys(value).length !== 0)

      setData(responseDetails)
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setData([])
      } else {
        setError(true)
      }
    } finally {
      setLoading(false)
    }
  }, [])

  return {
    loading,
    data,
    error,
    getAllPokemon
  }
}
