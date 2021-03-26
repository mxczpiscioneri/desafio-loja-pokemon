import styled from 'styled-components'
import { Avatar, Box, Card, CardContent, Grid, Typography } from '@material-ui/core'

export const GridStyled = styled(Grid)`
  margin-top: 48px;
`
export const CardStyled = styled(Card)`
  overflow: inherit;
  background-color: #e3e4e8;
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
  padding: 32px 8px 8px 8px;
`
export const NameStyled = styled(Typography)`
  text-transform: capitalize;
  text-align: center;
`
export const TypesStyled = styled(Box)`
  text-align: center;
`
export const AvatarStyled = styled(Avatar)`
  margin: 0 4px;
  background-color: #cfcfcf;
  padding: 4px;
  width: 24px;
  height: 24px;
  display: inline-block;
`
export const PriceStyled = styled(Typography)`
  text-transform: capitalize;
  text-align: center;
`
