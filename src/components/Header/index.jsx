import React from 'react'
import { Toolbar } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
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
  </AppBarStyled>
)

export default Header
