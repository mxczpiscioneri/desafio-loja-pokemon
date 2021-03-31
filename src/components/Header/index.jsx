import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import { Toolbar } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import Tabs from '../Tabs'
import image from '../../assets/images/logo.png'
import { AppBarStyled, InputBaseStyled, LogoStyled, SearchIconStyled, SearchStyled } from './style'
import { paths } from '../../routes'
import { getType } from '../../common/constants/typesOfPokemon'
import { usePokemonContext } from '../../contexts/pokemon'

const Header = () => {
  const { push } = useHistory()
  const { type } = usePokemonContext()

  const searchPokemon = (event) => {
    event.preventDefault()
    const name = event.target[0].value
    if (name) {
      push(paths.details.replace(':name', name))
    }
  }

  return (
    <AppBarStyled position="static" bg={getType(type).color}>
      <Toolbar>
        <LogoStyled src={image} />
        <SearchStyled onSubmit={searchPokemon}>
          <SearchIconStyled>
            <SearchIcon />
          </SearchIconStyled>
          <InputBaseStyled
            placeholder="Procurar..."
            inputProps={{ 'aria-label': 'search' }}
          />
        </SearchStyled>
      </Toolbar>
      <Tabs />
    </AppBarStyled>
  )
}

export default Header
