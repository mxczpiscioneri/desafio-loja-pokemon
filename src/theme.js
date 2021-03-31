import { createMuiTheme, responsiveFontSizes } from '@material-ui/core'

// colors
const primary = '#378B7D'
const primaryLight = '#639d25'
const primaryDark = '#427768'
const secondary = '#FA7D80'
const black = '#343a40'
const white = '#FFFFFF'
const darkBlack = 'rgb(36, 40, 44)'
const background = '#f5f5f5'
const backgroundMain = '#cfcfcf'
const warningLight = 'rgba(253, 200, 69, .3)'
const warningMain = 'rgba(253, 200, 69, .5)'
const warningDark = 'rgba(253, 200, 69, .7)'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primary,
      light: primaryLight,
      dark: primaryDark
    },
    secondary: { main: secondary },
    common: {
      white,
      black,
      darkBlack
    },
    warning: {
      light: warningLight,
      main: warningMain,
      dark: warningDark
    },
    background: {
      default: background,
      main: backgroundMain,
      gradient: `linear-gradient(45deg, ${primaryLight} 30%, ${primaryDark} 90%)`
    }
  },
  typography: {
    useNextVariants: true
  }
})

export default responsiveFontSizes(theme)
