import React, {useCallback, useState} from "react";
import {
  AppBar,
  Box,
  createStyles,
  IconButton,
  Theme,
  Toolbar,
  Typography, useMediaQuery, useTheme
} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import PhotosIcon from '@material-ui/icons/PhotoSizeSelectActual';
import {Menu as MenuIcon} from "@material-ui/icons";
import AppHeaderButtonsGroup from "../../molecules/AppHeaderButtonsGroup";
import AppHeaderDrawer from "../../molecules/AppHeaderDrawer";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.dark,
    },
    photosIcon: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    iconButton: {
      color: 'white',
      paddingRight: 0,
    },
  }),
);

function MainAppBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const classes = useStyles();
  const theme: Theme = useTheme();
  const mediaSmDown: boolean = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = useCallback((open: boolean) => () => {
    setDrawerOpen(open);
  }, [setDrawerOpen]);

  return (
    <AppBar position="static" className={classes.root} id={'back-to-top-anchor'}>
      <Toolbar>
        <IconButton edge="start" className={classes.photosIcon} color="inherit" aria-label="menu">
          <PhotosIcon />
        </IconButton>

        <Typography variant="h6" className={classes.title}>
          IberionCraft
          <Box component="span" display={{ xs: 'none', sm: 'inline' }}> - Dobre chwile razem!</Box>
        </Typography>

        <AppHeaderButtonsGroup />

        <Box display={{ xs: 'block', md: 'none' }}>
          <IconButton className={classes.iconButton} onClick={handleDrawerToggle(true)}>
            <MenuIcon />
          </IconButton>
        </Box>

        {mediaSmDown && (
          <AppHeaderDrawer
            drawerOpen={drawerOpen}
            handleDrawerToggle={handleDrawerToggle}
          />
        )}

      </Toolbar>
    </AppBar>
  );
}

export default MainAppBar;