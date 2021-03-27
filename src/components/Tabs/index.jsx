import React from 'react'
import typesOfPokemon, { getType } from '../../common/constants/typesOfPokemon'
import { useTypeContext } from '../../contexts/type'
import { Tabs as TabMui } from '@material-ui/core'
import { AvatarStyled, TabStyled } from './style'
import { keys } from '../../hooks/useLocalStorage'

const Tabs = () => {
  const { type, setType } = useTypeContext()
  const infoType = getType(type)
  const tabIndicatorProps = { style: { backgroundColor: infoType.color } }

  return (
    <TabMui
      value={type || false}
      onChange={(_, value) => setType(keys.type, value)}
      variant="scrollable"
      scrollButtons="auto"
      aria-label="scrollable auto tabs"
      TabIndicatorProps={tabIndicatorProps}
    >
      {typesOfPokemon.map(item => (
        <TabStyled
          key={item.name}
          label={item.name}
          value={item.name}
          icon={
            <AvatarStyled
              src={require(`../../assets/icons/${item.name}.svg`).default}
              alt={item.name}
            />
          }
        />
      ))}
    </TabMui>
  )
}

export default Tabs
