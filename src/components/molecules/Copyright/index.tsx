import {Box, createStyles, Link, Theme, Typography} from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles((_theme: Theme) => createStyles({
  preFooter: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'flex-end',
  },
  footer: {
    backgroundColor: '#f2f2f2',
  },
}));

function Copyright() {
  const classes = useStyles();

  return (
    <Box mt={16}>
      <Box mx={4} p={1} className={classes.preFooter}>
        <Typography variant={"caption"} color={"textSecondary"}>
          * Daty dostarczył Zielas, dzięki
        </Typography>
      </Box>

      <Box pt={4} pb={4} className={classes.footer}>
        <Typography variant="body2" color="textSecondary" align="center">
          {'Copyright © '}
          <Link color="inherit" href="/">
            IberionCraft
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Box>
    </Box>
  );
}

export default Copyright;