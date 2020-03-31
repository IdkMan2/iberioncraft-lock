import React from "react";
import ScrollTop from "../components/molecules/ScrollTop";
import MainAppBar from "../components/organisms/MainAppBar";
import HeroHeading from "../components/molecules/HeroHeading";
import {createStyles, Theme} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import Copyright from "../components/molecules/Copyright";
import Gallery from "../components/organisms/Gallery";
import EndCredits from "../components/molecules/EndCredits/EndCredits";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      backgroundColor: theme.palette.common.white,
      width: '100%',
      minHeight: '100vh',
      display: 'flex',
      flexFlow: 'column nowrap',
    },
    galleryContainer: {
      flex: 1,
    },
  }),
);

function Index() {
  const classes = useStyles();

  return (
    <main className={classes.main}>
      <MainAppBar />
      <HeroHeading />

      <Gallery />

      <EndCredits />
      <Copyright />
      <ScrollTop />
    </main>
  );
}

export default Index;