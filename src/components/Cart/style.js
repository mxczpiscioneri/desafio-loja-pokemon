import styled from 'styled-components'
import { Button, List, ListItem, ListSubheader } from '@material-ui/core'

export const ListStyled = styled(List)`
  ${({ theme }) => `
    width: 100%;
    max-width: 360px;
    background-color: ${theme.palette.background.default};
  `}
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
  ${({ theme }) => `
    background-color: ${theme.palette.background.main};
  `}
  span {
    float: left;
  }

  p {
    float: right;
  }
`

export const ButtonStyled = styled(Button)`
  ${({ theme }) => `
    background-color: ${theme.palette.primary.main};
    background: ${theme.palette.background.gradient};
  `}
`
