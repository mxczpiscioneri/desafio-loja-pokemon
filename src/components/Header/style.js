import styled from 'styled-components'
import { AppBar, InputBase } from '@material-ui/core'
import { fade } from '@material-ui/core/styles'

export const AppBarStyled = styled(AppBar)`
  ${({ theme }) => `
    background: ${theme.palette.background.gradient};
  `}
`

export const LogoStyled = styled.img`
  height: 56px;
`

export const SearchStyled = styled.form`
  position: relative;
  border-radius: 4px;
  background-color: ${() => fade('#FFF', 0.15)};
    &:hover {
    background-color: ${() => fade('#FFF', 0.25)};
  };
  width: 100%;
  margin-left: 0;
  @media (min-width: 600px) {
    margin-left: 24px;
  }
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
