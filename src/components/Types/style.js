import styled from 'styled-components'
import { Avatar, Box } from '@material-ui/core'

export const TypesStyled = styled(Box)`
  display: flex;
  justify-content: space-evenly;
  margin: 8px 0;
`
export const AvatarStyled = styled(Avatar)`
  background-color: ${props => props.color};
  padding: 4px;
`
