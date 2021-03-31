import React from 'react'
import PropTypes from 'prop-types'
import { Chip } from '@material-ui/core'
import { getType } from '../../common/constants/typesOfPokemon'
import { AvatarStyled, TypesStyled } from './style'

const Types = ({ data }) => (
  <TypesStyled>
    {data.map(type => (
      <Chip
        key={type.type.name}
        label={type.type.name}
        avatar={
          <AvatarStyled
            color={getType(type.type.name).color}
            src={require(`../../assets/icons/${type.type.name}.svg`).default}
            alt={type.type.name}
            title={type.type.name} />
        }
        variant="outlined"
      />
    ))}
  </TypesStyled>
)

Types.propTypes = {
  data: PropTypes.array.isRequired
}

export default Types
