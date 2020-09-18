// Material UI
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
//import { green, purple } from '@material-ui/core/colors';

let theme = createMuiTheme({
  palette: {
    type: "dark",
    background: {
      default: "#43484d",
      paper: "#43484d"
    },
    primary: {
      light: "#ffebc8",
      main: "#cfb997",
      dark: "#9d8969",
    },
    secondary: {
      light: "#fbffda",
      main: "#c8e8a8",
      dark: "#97b679",
    },
    text: {
      primary: "#ffffff"
    },
    action: {
      hover: "#cfb997",
      selected: "#c8e8a8",
    }
  },
  status: {
    //danger: 'orange',
  },
});


export default responsiveFontSizes(theme);