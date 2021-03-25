import styled from 'styled-components'
import Backdrop from '@material-ui/core/Backdrop'

export const BackdropStyled = styled(Backdrop)`
  z-index: 99;
`

export const LoadingStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 100;
`
