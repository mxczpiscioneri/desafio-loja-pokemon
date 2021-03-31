import styled from 'styled-components'
import { Card, CardContent, Grid, Typography } from '@material-ui/core'

export const GridStyled = styled(Grid)`
  margin-top: 48px;
`
export const CardStyled = styled(Card)`
  ${({ theme }) => `
    overflow: inherit;
    background-color: ${theme.palette.background.default};
    position: relative;
    cursor: pointer;
  `}
`
export const ImageStyled = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  top: -48px;
  margin: 0 auto;
  padding: 0 32px;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  &:hover {
    transform: rotateY(180deg);
  }
`
export const CardContentStyled = styled(CardContent)`
  padding: 36px 8px 0 8px !important;
  text-align: center;
  width: 100%;
`
export const NameStyled = styled(Typography)`
  text-transform: capitalize;
  text-align: center;
`
export const PriceStyled = styled(Typography)`
  text-align: center;
`
export const LoadingStyled = styled.div`
  margin-top: 60px;
  width: 100%;
`
