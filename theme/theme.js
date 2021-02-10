import { createMuiTheme } from '@material-ui/core/styles'
import palette from './palette'
import typography from './typography'

export const Spacing = 8

const theme = createMuiTheme({
  palette,
  typography
})

theme.overrides = {
  MuiInputLabel: {
    root: {
      color: "black",
      "&$focused": {
        color: "black"
      }
    }
  },
  MuiInputBase: {
    root: {
      color: 'black'
    },
    input: {
      "&:-webkit-autofill": {
        WebkitBoxShadow: "0 0 0 1000px #EAE5E5 inset"
      }
    }
  },
  MuiPaper: {
    root: {
      backgroundColor: 'black',
      opacity: 0.8,
      color: 'white'
    }
  }
}

export default theme