import { Button, Card, ListItem, Slider, Typography } from '@material-ui/core'
import styled from 'styled-components'

export const LoadingStyled = styled.div`
  margin-top: 60px;
  width: 100%;
`

export const CardStyled = styled(Card)`
  margin-top: 24px;
`

export const NameStyled = styled(Typography)`
  text-transform: capitalize;
  margin: 0;
  font-size: 2rem;
`

export const SliderStyled = styled(Slider)`
  padding: 0;
  height: 10px;
  cursor: initial;

  .MuiSlider-rail{
    height: 10px;
    border-radius: 4px;
  }

  .MuiSlider-track{
    height: 10px;
    border-radius: 4px;
    background-image: linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);
    background-size: 1rem 1rem;
  }

  .MuiSlider-thumb{
    width: 10px;
    height: 10px;
    margin-top: 0;
  }
`

export const SubTitleStyled = styled(Typography)`
  font-weight: bold;
  font-size: 1rem;
`

export const Center = styled.div`
  text-align: center;
  padding: 16px 32px;
  display: flex;
  flex-direction: column;
`

export const ListItemColumn = styled(ListItem)`
  flex-direction: column;
`

export const ListItemBetween = styled(ListItem)`
  justify-content: space-between;
`

export const ListItemCenter = styled(ListItem)`
  justify-content: center;
`

export const ButtonStyled = styled(Button)`
  ${({ theme }) => `
    background-color: ${theme.palette.primary.main};
    background: ${theme.palette.background.gradient};
    min-width: 50%;
    transition: opacity .5s ease-out;
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  `}

  :hover {
    opacity: 0.8;
  }
`

export const PriceStyled = styled(Typography)`
  margin: 16px 0;
`
