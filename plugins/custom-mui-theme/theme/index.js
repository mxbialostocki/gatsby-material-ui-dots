import { createMuiTheme } from '@material-ui/core/styles';
import typography from './typography'

const palette = {
  primary: { main: '#f50057' },
  secondary: { main: '#D81B60' }
};

const themeName = 'Dots Pew Invisibles Rosella';

export default createMuiTheme({ palette, themeName, typography });
