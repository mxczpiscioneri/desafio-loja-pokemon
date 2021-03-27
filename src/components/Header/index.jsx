import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import { Toolbar } from '@material-ui/core'
import Tabs from '../Tabs'
import image from '../../assets/images/logo.png'
import { AppBarStyled, InputBaseStyled, LogoStyled, SearchIconStyled, SearchStyled } from './style'

const Header = () => (
  <AppBarStyled position="static">
    <Toolbar>
      <LogoStyled src={image} />
      <SearchStyled>
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

export default Header
