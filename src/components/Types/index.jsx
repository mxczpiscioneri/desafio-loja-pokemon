import React from 'react'
import PropTypes from 'prop-types'
import { getType } from '../../common/constants/typesOfPokemon'
import { AvatarStyled, ChipStyled, TypesStyled } from './style'

const Types = ({ data, colapse }) => (
  <TypesStyled>
    {data.map(type => (
      <ChipStyled
        key={type.type.name}
        label={!colapse && type.type.name}
        colapse={colapse ? 1 : 0}
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
  data: PropTypes.array.isRequired,
  colapse: PropTypes.bool.isRequired
}

export default Types
