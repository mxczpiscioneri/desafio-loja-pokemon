import React from 'react'
import PropTypes from 'prop-types'
import { SwipeableDrawer } from '@material-ui/core'
import Cart from '../Cart'

const Drawer = ({ open, toggleDrawer }) => {
  const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
  const handlerOpenClose = (event) => {
    if (event) {
      event.preventDefault()
    }

    toggleDrawer()
  }

  return (
    <SwipeableDrawer
      anchor={'right'}
      open={open}
      onClose={handlerOpenClose}
      onOpen={handlerOpenClose}
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS}
    >
      <Cart />
    </SwipeableDrawer>
  )
}

Drawer.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired
}

export default Drawer
