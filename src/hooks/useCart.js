import { useState } from 'react'

export const useCart = () => {
  const [open, setOpen] = useState(false)

  const toggleDrawer = () => {
    setOpen(status => !status)
  }

  return {
    open,
    toggleDrawer
  }
}
