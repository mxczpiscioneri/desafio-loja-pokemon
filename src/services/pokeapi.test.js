import MockAdapter from 'axios-mock-adapter'
import Api from './api'
import PokeApiService from './pokeapi'
import mockListPokemon from '../assets/mock-data/list-pokemon.json'
import mockDetailsPokemon from '../assets/mock-data/details-pokemon.json'

const mock = new MockAdapter(Api)

describe('PokeApiService', () => {
  afterEach(() => {
    mock.reset()
  })

  test('getAll successfully', async () => {
    mock.onGet('/pokemon?offset=0&limit=2').reply(200, mockListPokemon)

    const response = await PokeApiService.getAll(0, 2)
    expect(response.data).toEqual(mockListPokemon)
  })

  test('getDetails successfully', async () => {
    mock.onGet(mockListPokemon.results[0].url).reply(200, mockDetailsPokemon)

    const response = await PokeApiService.getDetails(mockListPokemon.results[0].url)
    expect(response.data).toEqual(mockDetailsPokemon)
  })

  test('getType successfully', async () => {
    mock.onGet('/type/test').reply(200, mockListPokemon)

    const response = await PokeApiService.getType('test')
    expect(response.data).toEqual(mockListPokemon)
  })

  test('search successfully', async () => {
    mock.onGet('/pokemon/test').reply(200, mockDetailsPokemon)

    const response = await PokeApiService.search('test')
    expect(response.data).toEqual(mockDetailsPokemon)
  })
})
