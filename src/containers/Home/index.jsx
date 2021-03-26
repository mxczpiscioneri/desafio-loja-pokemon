/* eslint-disable no-unused-expressions */
/* eslint complexity: ["error", 5] */

import React, { useEffect } from 'react'
import Alert from '@material-ui/lab/Alert'
import { Button, CardActionArea, Container, Grid, Snackbar, Typography } from '@material-ui/core'
import Loading from '../../components/Loading'
import { usePokemon } from '../../hooks/usePokemon'
import { GridStyled, CardStyled, ImageStyled, CardContentStyled, NameStyled, TypesStyled, PriceStyled, AvatarStyled } from './style'

const Home = () => {
  const {
    loading,
    data,
    error,
    setError,
    paginate,
    getAllPokemon
  } = usePokemon()

  useEffect(() => {
    getAllPokemon()
  }, [getAllPokemon])

  return (
    <Container>
      {loading &&
        <Loading backdrop={true} />
      }
      {error &&
        <Snackbar
          open={error}
          anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
          autoHideDuration={6000}
          onClose={() => setError(false)}
        >
          <Alert variant="filled" severity="error">
            Ocorreu um erro, tente novamente!
          </Alert>
        </Snackbar>
      }
      <Grid container spacing={2}>
        {data.length > 0 ? (
          <>
            {data.map(item => (
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
            <Grid item xs={12} align="center">
              <Button data-testid="btnLoadMore" variant="outlined" size="large" color="primary" onClick={() => paginate()}>
              Carregar mais
              </Button>
            </Grid>
          </>
        ) :
          !loading && (
            <Grid item xs={12} align="center">
              <Typography>Nenhum Pokemon encontrado...</Typography>
            </Grid>
          )
        }

      </Grid>
    </Container>
  )
}

export default Home
