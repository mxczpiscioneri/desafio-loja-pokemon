/* eslint complexity: ["error", 5] */

import React from 'react'
import PropTypes from 'prop-types'
import { Button, CardActionArea, Grid, Typography } from '@material-ui/core'
import { GridStyled, CardStyled, ImageStyled, CardContentStyled, NameStyled, TypesStyled, PriceStyled, AvatarStyled, LoadingStyled } from './style'
import Loading from '../Loading'

const Gallery = ({ list, loading, paginate }) => (
  <Grid container spacing={2}>
    {loading &&
      <LoadingStyled>
        <Loading backdrop={false} />
      </LoadingStyled>
    }
    {list.length > 0 ? (
      <>
        {list.map(item => (
          <GridStyled item xs={6} sm={4} md={3} lg={2} key={item.id}>
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
        {paginate &&
        <Grid item xs={12} align="center">
          <Button data-testid="btnLoadMore" variant="outlined" size="large" color="primary" onClick={() => paginate()}>
              Carregar mais
          </Button>
        </Grid>
        }
      </>
    ) :
      !loading && (
        <Grid item xs={12} align="center">
          <Typography>Nenhum Pokemon encontrado...</Typography>
        </Grid>
      )
    }

  </Grid>
)

Gallery.propTypes = {
  list: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  paginate: PropTypes.any
}

Gallery.defaultProps = {
  paginate: undefined
}

export default Gallery
