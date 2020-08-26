import { createMuiTheme } from '@material-ui/core/styles';
import typography from './typography'

// Set pallete primary and secondary colours here
const palette = {
  primary: { main: '#f44336' },
  secondary: { main: '#ff7043' }
};

// set core overrides here using the Mui element
const overrides = {
  // this example MuiButton (https://material-ui.com/api/button/)
  MuiButton: {
    text: {
      fontFamily: "'Roboto Mono', monospace, sans-serif"
    }
  }
}

const themeName = 'Dots Pew Invisibles Rosella';

export default createMuiTheme({ palette, themeName, typography, overrides });
