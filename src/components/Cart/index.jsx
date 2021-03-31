import React, { Fragment } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import { Avatar, Button, Divider, IconButton, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText } from '@material-ui/core'
import { ListItemResumeStyled, ListStyled, ListSubheaderStyled } from './style'
import { usePokemonContext } from '../../contexts/pokemon'

const Cart = () => {
  const { cart, removeCart, clearCart } = usePokemonContext()
  let total = 0

  const handlerFinish = () => {
    const text = `Você escolheu ${cart.length} Pokemón.<br />O valor total é de $ ${total}.`
    const MySwal = withReactContent(Swal)
    MySwal.fire({
      title: 'Revisão do pedido',
      html: text,
      showCancelButton: true,
      confirmButtonText: 'Concluir pedido',
      cancelButtonText: 'Voltar',
      reverseButtons: true,
      allowOutsideClick: false
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart()
        MySwal.fire({
          icon: 'success',
          title: 'Obrigado pela compra!',
          text: `Você ganhou $ ${total / 10} (10%) de cashback!`,
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 5000
        })
      }
    })
  }

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
          <Button data-testid="btnFinish" size="large" variant="contained" color="primary" fullWidth onClick={handlerFinish}>
            Continuar
          </Button>
        </ListItemResumeStyled>
      </ListStyled>
    </>
  )
}

export default Cart
