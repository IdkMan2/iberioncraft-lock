import React, {useCallback} from "react";
import {Box, Container, createStyles, Fab, Grid, Theme, Typography, useMediaQuery, useTheme} from "@material-ui/core";
import {ArrowDownward as ArrowDownwardIcon} from "@material-ui/icons";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      maxWidth: 720,
      paddingLeft: 0,
      paddingRight: 0,
    },
    rootBox: {
      /*[theme.breakpoints.down('xs')]: {
        minHeight: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
      },*/
    },
    fab: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
    },
  }),
);

function HeroHeading() {
  const classes = useStyles();
  const theme: Theme = useTheme();
  const mediaSmDown: boolean = useMediaQuery(theme.breakpoints.down('sm'));

  const handleFabClick = useCallback((/*event: React.MouseEvent<HTMLElement>*/) => {
    window.scrollTo({
      top: 553,
      behavior: 'smooth'
    });
  }, []);

  return (
    <Container className={classes.container}>
      <Box mt={8} mb={6} className={classes.rootBox}>
        <Grid container justify={"center"}>
          <Typography
            variant={"h2"}
            align={"center"}
            gutterBottom
          >
            IberionCraft
          </Typography>

          <Typography
            variant={mediaSmDown ? 'h6' : 'h5'}
            color={'textSecondary'}
            align={"center"}
            paragraph
          >
            To już ponad rok od kiedy serwer został wyłączony.
            Chciałbym poprosić Cię na słówko i powspominać stare, dobre czasy,
            jak również te całkiem nie tak odległe.
          </Typography>

          <Fab
            color="secondary"
            className={classes.fab}
            onClick={handleFabClick}
          >
            <ArrowDownwardIcon />
          </Fab>
        </Grid>
      </Box>
    </Container>
  );
}

export default HeroHeading;