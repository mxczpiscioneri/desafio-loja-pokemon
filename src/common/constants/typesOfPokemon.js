const typesOfPokemon = [
  { name: 'all', color: '#333333' },
  { name: 'normal', color: '#a7a776' },
  { name: 'fighting', color: '#c03827' },
  { name: 'flying', color: '#a890f0' },
  { name: 'poison', color: '#a04aa0' },
  { name: 'ground', color: '#e0c068' },
  { name: 'rock', color: '#b8a038' },
  { name: 'bug', color: '#a8b820' },
  { name: 'ghost', color: '#705898' },
  { name: 'steel', color: '#9393b3' },
  { name: 'fire', color: '#f08030' },
  { name: 'water', color: '#6890f0' },
  { name: 'grass', color: '#78c851' },
  { name: 'electric', color: '#f8d030' },
  { name: 'psychic', color: '#ee5588' },
  { name: 'ice', color: '#67c6c6' },
  { name: 'dragon', color: '#7563f7' },
  { name: 'dark', color: '#705848' },
  { name: 'fairy', color: '#ed8590' }
]

export const getType = name => typesOfPokemon.find(item => item.name === name) || {}

export default typesOfPokemon
