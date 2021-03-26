import MockAdapter from 'axios-mock-adapter'
import { renderHook, act } from '@testing-library/react-hooks'
import Api from '../services/api'
import mockListPokemon from '../assets/mock-data/list-pokemon.json'
import mockDetailsPokemon from '../assets/mock-data/details-pokemon.json'
import { usePokemon } from './usePokemon'

const mock = new MockAdapter(Api)
const limit = 60

describe('usePokemon hooks', () => {
  test('getAllPokemon with success', async () => {
    const { result, waitForNextUpdate } = renderHook(() => usePokemon())

    mock.onGet(`/pokemon?offset=0&limit=${limit}`).reply(200, mockListPokemon)
    mock.onGet(mockListPokemon.results[0].url).reply(200, mockDetailsPokemon)
    mock.onGet(mockListPokemon.results[1].url).reply(200, mockDetailsPokemon)

    act(() => {
      result.current.getAllPokemon()
    })

    await waitForNextUpdate()

    expect(result.current.data[0]).toStrictEqual(mockDetailsPokemon)
    expect(result.current.error).toBe(false)
  })

  test('getAllPokemon with error 404', async () => {
    const { result, waitForNextUpdate } = renderHook(() => usePokemon())

    mock.onGet(`/pokemon?offset=0&limit=${limit}`).reply(404)

    act(() => {
      result.current.getAllPokemon()
    })

    await waitForNextUpdate()

    expect(result.current.data).toStrictEqual([])
    expect(result.current.error).toBe(false)
  })

  test('getAllPokemon with error 500', async () => {
    const { result, waitForNextUpdate } = renderHook(() => usePokemon())

    mock.onGet(`/pokemon?offset=0&limit=${limit}`).reply(500)

    act(() => {
      result.current.getAllPokemon()
    })

    await waitForNextUpdate()

    expect(result.current.data).toStrictEqual([])
    expect(result.current.error).toBe(true)
  })
})
