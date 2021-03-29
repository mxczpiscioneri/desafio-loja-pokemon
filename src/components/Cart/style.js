import styled from 'styled-components'
import { List, ListItem, ListSubheader } from '@material-ui/core'

export const ListStyled = styled(List)`
  width: 100%;
  max-width: 360px;
  background-color: #fafafa;
`

export const ListSubheaderStyled = styled(ListSubheader)`
  box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 16px;

  svg {
    margin-right: 16px;
  }
`

export const ListItemResumeStyled = styled(ListItem)`
  background-color: #ccc;

  span {
    float: left;
  }

  p {
    float: right;
  }
`
