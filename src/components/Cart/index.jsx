import React, { Fragment } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import { Avatar, Divider, IconButton, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText } from '@material-ui/core'
import { ButtonStyled, ListItemResumeStyled, ListStyled, ListSubheaderStyled } from './style'
import { usePokemonContext } from '../../contexts/pokemon'

const Cart = () => {
  const { cart, removeCart, clearCart, toggleDrawer } = usePokemonContext()
  let total = 0

  const handlerFinish = () => {
    toggleDrawer()
    const text = `Você escolheu ${cart.length} Pokemón.<br />O valor total é de ${total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}.`
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
          text: `Você ganhou ${(total / 10).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} (10%) de cashback!`,
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 5000
        })
      }
    })
  }

  return (
    <>
      <ListStyled subheader={<ListSubheaderStyled>Carrinho de compras</ListSubheaderStyled>}>
        {cart.map((pokemon, index) => {
          total += pokemon.base_experience
          return (
            <Fragment key={index}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar src={pokemon.sprites.front_default} />
                </ListItemAvatar>
                <ListItemText primary={pokemon.name} secondary={pokemon.base_experience.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} />
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
        {cart.length === 0 ?
          <ListItem>
            <ListItemText primary="Adicione um Pokémon no carrinho" />
          </ListItem> :
          <>
            <ListItemResumeStyled>
              <ListItemText primary='Total' secondary={total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} />
            </ListItemResumeStyled>
            <ListItemResumeStyled>
              <ButtonStyled data-testid="btnFinish" size="large" variant="contained" color="primary" fullWidth onClick={handlerFinish}>
            Continuar
              </ButtonStyled>
            </ListItemResumeStyled>
          </>
        }
      </ListStyled>
    </>
  )
}

export default Cart
