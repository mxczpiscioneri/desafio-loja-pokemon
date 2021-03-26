import styled from 'styled-components'
import { Avatar, fade, Tab } from '@material-ui/core'

export const TabStyled = styled(Tab)`
  color: ${() => fade('#FFF', 0.7)};
`

export const AvatarStyled = styled(Avatar)`
  width: 16px;
  height: 16px;
  margin-bottom: 0 !important;
  opacity: 0.7;
`
