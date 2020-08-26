import { createMuiTheme } from '@material-ui/core/styles';
import typography from './typography'

// Set pallete primary and secondary colours here
const palette = {
  primary: { main: '#f50057' },
  secondary: { main: '#D81B60' }
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

export default createMuiTheme({ palette, themeName, typography });
