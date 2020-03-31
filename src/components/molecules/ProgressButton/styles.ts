import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/core";
import {green} from "@material-ui/core/colors";

export default makeStyles(() =>
  createStyles({
    wrapper: {
      position: 'relative',
    },
    circularProgress: {
      color: green[500],
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: -18,
      marginLeft: -18,
    },
  })
);