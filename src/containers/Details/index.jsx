/* eslint complexity: ["error", 5] */

import React, { useEffect } from 'react'
import { capitalize, Chip, Container, Grid, List, Typography } from '@material-ui/core'
import { useParams } from 'react-router-dom'
import { Img } from 'react-image'
import Header from '../../components/Header'
import Loading from '../../components/Loading'
import { usePokemon } from '../../hooks/usePokemon'
import { AvatarStyled, ButtonStyled, CardStyled, Center, ChipsGroup, ListItemBetween, ListItemCenter, ListItemColumn, LoadingStyled, NameStyled, SliderStyled, SubTitleStyled } from './style'
import { getType } from '../../common/constants/typesOfPokemon'
import { usePokemonContext } from '../../contexts/pokemon'

const Details = () => {
  const {
    loading,
    error,
    data,
    searchPokemon
  } = usePokemon()
  const { name } = useParams()
  const { addCart } = usePokemonContext()

  useEffect(() => {
    searchPokemon(name)
  }, [searchPokemon, name])

  return (
    <>
      <Header />
      <Container>
        {error &&
          <Typography variant="h4" align="center">Pokémon não encontrado :(</Typography>
        }
        {loading &&
          <LoadingStyled>
            <Loading backdrop={false} />
          </LoadingStyled>
        }
        {data[0] &&
          <CardStyled>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Center>
                  <NameStyled variant="h1">{data[0].name}</NameStyled>
                  <ChipsGroup>
                    {data[0].types.map(type => (
                      <Chip
                        key={type.type.name}
                        label={type.type.name}
                        avatar={<AvatarStyled
                          color={getType(type.type.name).color}
                          src={require(`../../assets/icons/${type.type.name}.svg`).default}
                          alt={type.type.name} />
                        }
                        variant="outlined"
                      />
                    ))}
                  </ChipsGroup>
                  <Img
                    src={[
                      data[0].sprites.other.dream_world.front_default,
                      data[0].sprites.other['official-artwork'].front_default
                    ]}
                    alt={data[0].name}
                  />
                  <ButtonStyled data-testid="btnAddCart" size="large" variant="contained" color="primary" onClick={() => addCart(data[0])}>Comprar</ButtonStyled>
                </Center>
              </Grid>

              <Grid item xs={4}>
                <Center>
                  <SubTitleStyled variant="h6">Informações:</SubTitleStyled>
                  <List>
                    <ListItemBetween divider>Altura <span>{data[0].height * 10} cm</span></ListItemBetween>
                    <ListItemBetween divider>Peso <span>{data[0].weight / 10} kg</span></ListItemBetween>
                  </List>
                  <br />
                  <SubTitleStyled variant="h6">Habilidades:</SubTitleStyled>
                  <List>
                    {data[0].abilities.map(ability => <ListItemCenter divider key={ability.ability.name}>{capitalize(ability.ability.name.replace('-', ' '))}</ListItemCenter>)}
                  </List>
                  <br />
                  <SubTitleStyled variant="h6">Estatísticas:</SubTitleStyled>
                  <List>
                    {data[0].stats.map(stat => (
                      <ListItemColumn key={stat.stat.name}>
                        {capitalize(stat.stat.name.replace('-', ' '))} <SliderStyled value={stat.base_stat} valueLabelDisplay="auto" aria-labelledby="continuous-slider" />
                      </ListItemColumn>
                    ))}
                  </List>
                </Center>
              </Grid>

              <Grid item xs={2}>
                <Center>
                  <SubTitleStyled variant="h6">Poderes:</SubTitleStyled>
                  <List>
                    {data[0].moves.map(({ move }) => (
                      <ListItemCenter dense key={move.name}>
                        <span>{capitalize(move.name.replace('-', ' '))}</span>
                      </ListItemCenter>
                    ))}
                  </List>
                </Center>
              </Grid>
            </Grid>
          </CardStyled>
        }
      </Container>
    </>
  )
}

export default Details
