import React from 'react'
import PropTypes from 'prop-types'
import CircularProgress from '@material-ui/core/CircularProgress'
import { BackdropStyled, LoadingStyled } from './style'

const Progress = () => (
  <LoadingStyled>
    <CircularProgress />
  </LoadingStyled>
)

const Backdrop = () => (
  <BackdropStyled open={true}>
    <Progress />
  </BackdropStyled>
)

const Loading = ({ backdrop }) => (backdrop ? <Backdrop/> : <Progress />)

Loading.propTypes = {
  backdrop: PropTypes.bool.isRequired
}

export default Loading
