import { useState } from 'react'

export const useCart = () => {
  const [open, setOpen] = useState(false)

  const toggleDrawer = () => {
    console.log('toggleDrawer', !open)
    setOpen(status => !status)
  }

  return {
    open,
    toggleDrawer
  }
}
