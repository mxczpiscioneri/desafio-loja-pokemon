import styled from 'styled-components'
import image from './assets/images/background.png'

export const BackgroundStyled = styled.div`
  background-image: url(${image});
  background-color: ${props => props.backgroundColor};
  background-attachment: fixed;
  transition: background-color 0.5s ease;
  min-height: 100vh;
`
