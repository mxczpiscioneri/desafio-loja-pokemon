import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingIcon from '@material-ui/icons/ShoppingBasket'
import { Badge, Toolbar } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import Tabs from '../Tabs'
import image from '../../assets/images/logo.png'
import { AppBarStyled, InputBaseStyled, LogoStyled, SearchIconStyled, SearchStyled, ShoppingIconStyled } from './style'
import { paths } from '../../routes'
import { getType } from '../../common/constants/typesOfPokemon'
import { usePokemonContext } from '../../contexts/pokemon'

const Header = () => {
  const { push } = useHistory()
  const { type, toggleDrawer, cart } = usePokemonContext()

  const searchPokemon = (event) => {
    event.preventDefault()
    const name = event.target[0].value
    if (name) {
      push(paths.details.replace(':name', name.toLowerCase()))
    }
  }

  return (
    <AppBarStyled position="static" bg={getType(type).color}>
      <Toolbar>
        <LogoStyled src={image} alt="Pokémon" title="Pokémon" onClick={() => push(paths.home)} />
        <SearchStyled onSubmit={searchPokemon}>
          <SearchIconStyled>
            <SearchIcon />
          </SearchIconStyled>
          <InputBaseStyled
            placeholder="Procurar..."
            inputProps={{ 'aria-label': 'search' }}
          />
        </SearchStyled>
        <ShoppingIconStyled data-testid="btnToggleDrawer" onClick={toggleDrawer}>
          <Badge badgeContent={cart.length}>
            <ShoppingIcon />
          </Badge>
        </ShoppingIconStyled>
      </Toolbar>
      <Tabs />
    </AppBarStyled>
  )
}

export default Header
