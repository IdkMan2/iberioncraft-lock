import {createMuiTheme} from '@material-ui/core/styles';
import {Theme} from "@material-ui/core/styles/createMuiTheme";

export const stockMuiTheme: Theme = createMuiTheme({
  palette: {
    primary: {
      light: "#BBDEFB",
      main: "#2196F3",
      dark: "#1976D2",
    },
    secondary: {
      light: "#FF5252",
      main: "#F44336",
      dark: "#D32F2F",
    },
  },
});