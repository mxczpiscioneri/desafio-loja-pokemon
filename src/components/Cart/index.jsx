import React, { Fragment } from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import { Avatar, Button, Divider, IconButton, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText } from '@material-ui/core'
import { ListItemResumeStyled, ListStyled, ListSubheaderStyled } from './style'
import { usePokemonContext } from '../../contexts/pokemon'

const Cart = () => {
  const handlerFinish = () => {}
  const { cart, removeCart } = usePokemonContext()
  let total = 0

  if (!cart || cart.length === 0) {
    return <Fragment />
  }
  return (
    <>
      <ListStyled subheader={<ListSubheaderStyled><ShoppingCartIcon />Carrinho de compras</ListSubheaderStyled>}>
        {cart.map((pokemon, index) => {
          total += pokemon.base_experience
          return (
            <Fragment key={index}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar src={pokemon.sprites.front_default} />
                </ListItemAvatar>
                <ListItemText primary={pokemon.name} secondary={`$ ${pokemon.base_experience}`} />
                <ListItemSecondaryAction>
                  <IconButton size="small" edge="end" aria-label="deletar" onClick={() => removeCart(index)}>
                    <HighlightOffIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <Divider />
            </Fragment>
          )
        })}
        <ListItemResumeStyled>
          <ListItemText primary='Total' secondary={`$ ${total}`} />
        </ListItemResumeStyled>
        <ListItemResumeStyled>
          <Button data-testid="btnFinish" size="large" variant="contained" color="primary" onClick={handlerFinish}>
            Finalizar compra
          </Button>
        </ListItemResumeStyled>
      </ListStyled>
    </>
  )
}

export default Cart
