/* eslint-disable no-unused-expressions */

import React, { useEffect } from 'react'
import Alert from '@material-ui/lab/Alert'
import { CardActionArea, Container, Grid } from '@material-ui/core'
import Loading from '../../components/Loading'
import { usePokemon } from '../../hooks/usePokemon'
import { GridStyled, CardStyled, ImageStyled, CardContentStyled, NameStyled, TypesStyled, PriceStyled, AvatarStyled } from './style'

const Home = () => {
  const {
    loading,
    data,
    error,
    getAllPokemon
  } = usePokemon()

  useEffect(() => {
    getAllPokemon()
  }, [getAllPokemon])

  useEffect(() => {
    error &&
      <Alert variant="filled" severity="error">
        Ocorreu um erro, tente novamente!
      </Alert>
  }, [error])

  return (
    <Container>
      {loading && <Loading backdrop={true} /> }
      <Grid container spacing={2}>
        {data.length > 0 && data.map(item => (
          <GridStyled item xs={2} key={item.id}>
            <CardStyled>
              <CardActionArea>
                <ImageStyled
                  alt={item.name}
                  title={item.name}
                  src={item.sprites.front_default}
                  onMouseOver={(e) => {
                    e.currentTarget.src = item.sprites.back_default
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.src = item.sprites.front_default
                  }}
                />
                <CardContentStyled>
                  <NameStyled variant="h5">
                    {item.name}
                  </NameStyled>
                  <PriceStyled variant="subtitle1">
                    <b>$</b> {item.base_experience}
                  </PriceStyled>
                  <TypesStyled>
                    {item.types.map(type => (
                      <AvatarStyled
                        key={type.type.name}
                        src={require(`../../assets/icons/${type.type.name}.svg`).default}
                        alt={type.type.name}
                      />
                    ))}
                  </TypesStyled>
                </CardContentStyled>
              </CardActionArea>
            </CardStyled>
          </GridStyled>
        ))}
      </Grid>
    </Container>
  )
}

export default Home
