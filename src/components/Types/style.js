import styled from 'styled-components'
import { Avatar, Box, Chip } from '@material-ui/core'

export const TypesStyled = styled(Box)`
  display: flex;
  justify-content: space-evenly;
  margin: 8px 0;
`
export const ChipStyled = styled(Chip)`
  min-width: 32px;
  
  div {
    margin: ${props => (props.colapse && '0 !important')};
  }
  
  span {
    padding: ${props => (props.colapse ? 0 : '12px')};
  }
`
export const AvatarStyled = styled(Avatar)`
  background-color: ${props => props.color};
  padding: 4px;
`
