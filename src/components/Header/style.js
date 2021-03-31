import styled from 'styled-components'
import { AppBar, InputBase } from '@material-ui/core'
import { fade } from '@material-ui/core/styles'
import lightenDarkenColor from '../../common/utils/color'

export const AppBarStyled = styled(AppBar)`
  background: ${props => `linear-gradient(45deg, ${lightenDarkenColor(props.bg, -30)} 30%, ${lightenDarkenColor(props.bg, 30)} 90%)`};
`

export const LogoStyled = styled.img`
  height: 56px;
  cursor: pointer;
`

export const SearchStyled = styled.form`
  position: relative;
  border-radius: 4px;
  background-color: ${() => fade('#FFF', 0.15)};
    &:hover {
    background-color: ${() => fade('#FFF', 0.25)};
  };
  width: 100%;
  margin: 0 16px 0 24px;
`

export const SearchIconStyled = styled.div`
  padding: 16px;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const InputBaseStyled = styled(InputBase)`
  color: inherit;
  padding: 8px;
  padding-left: 56px;
  width: 100%;
`

export const ShoppingIconStyled = styled.div`
  padding: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`
