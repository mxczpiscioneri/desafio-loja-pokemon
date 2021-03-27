import React from 'react'
import typesOfPokemon, { getType } from '../../common/constants/typesOfPokemon'
import { useTypeContext } from '../../contexts/type'
import { Tabs as TabMui } from '@material-ui/core'
import { AvatarStyled, TabStyled } from './style'
import { keys } from '../../hooks/useLocalStorage'
import { useHistory } from 'react-router-dom'
import { paths } from '../../routes'

const Tabs = () => {
  const { push } = useHistory()
  const { type, setType } = useTypeContext()
  const infoType = getType(type)
  const tabIndicatorProps = { style: { backgroundColor: infoType.color } }

  const handleTab = (value) => {
    setType(keys.type, value)
    if (value === typesOfPokemon[0].name) {
      push(paths.home)
    } else {
      push(paths.type.replace(':type', value))
    }
  }

  return (
    <TabMui
      value={type || false}
      onChange={(_, value) => handleTab(value)}
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
