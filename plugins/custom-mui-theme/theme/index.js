import { createMuiTheme } from '@material-ui/core/styles'
// Bam prefers to store the typography JSS object in it's own file, as it can become quite verbose. 
import typography from './typography'

// Set pallete primary and secondary colours here
const palette = {
  primary: { main: '#f44336' },
  secondary: { main: '#ff7043' }
}

// set core overrides here using the Mui element
const overrides = {
  // this example MuiButton (https://material-ui.com/api/button/)
  MuiButton: {
    text: {
      fontFamily: "'Roboto Mono', monospace, sans-serif"
    }
  }
}

const themeName = 'Dots Pew Invisibles Rosella'

export default createMuiTheme({ palette, themeName, typography, overrides })