import Api from './api'

const PokeApiService = {
  getAll (offSet, limit) {
    return Api.get(`pokemon?offset=${offSet}&limit=${limit}`)
  },
  getDetails (url) {
    return Api.get(url)
  },
  getType (type) {
    return Api.get(`type/${type}`)
  },
  search (name) {
    return Api.get(`pokemon/${name}`)
  }
}

export default PokeApiService
