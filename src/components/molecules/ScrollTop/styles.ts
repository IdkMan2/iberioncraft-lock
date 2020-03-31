import {makeStyles} from "@material-ui/styles";
import createStyles from "@material-ui/styles/createStyles";
import {Theme} from "@material-ui/core/styles/createMuiTheme";

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  }),
);