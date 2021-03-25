import Api from './api'

const PokeApiService = {
  getAll (offSet, limit) {
    return Api.get(`pokemon?offset=${offSet}&limit=${limit}`)
  },
  getDetails (url) {
    return Api.get(url)
  }
}

export default PokeApiService
