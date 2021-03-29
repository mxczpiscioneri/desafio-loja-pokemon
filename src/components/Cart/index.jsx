import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { Avatar, Button, Divider, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import { ListItemResumeStyled, ListStyled, ListSubheaderStyled } from './style'

let total = 0

const Cart = ({ resume }) => {
  const handlerFinish = () => {}

  if (!resume || resume.length === 0) {
    return <Fragment />
  }
  return (
    <>
      <ListStyled subheader={<ListSubheaderStyled><ShoppingCartIcon />Carrinho de compras</ListSubheaderStyled>}>
        {resume.map((pokemon) => {
          total += pokemon.base_experience
          return (
            <Fragment key={pokemon.id}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar src={pokemon.sprites.front_default} />
                </ListItemAvatar>
                <ListItemText primary={pokemon.name} secondary={`$ ${pokemon.base_experience}`} />
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

Cart.propTypes = {
  resume: PropTypes.array.isRequired
}

export default Cart
