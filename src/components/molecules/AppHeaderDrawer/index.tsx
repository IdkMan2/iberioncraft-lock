import React from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import {createStyles, List, ListItem, ListItemIcon, ListItemText, Theme} from "@material-ui/core";
import {faYoutubeSquare, faFacebookSquare, faDiscord} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {makeStyles} from "@material-ui/styles";

export interface AppHeaderDrawerProps {
  drawerOpen: boolean,
  handleDrawerToggle: (open: boolean) => () => void,
}

const useStyles = makeStyles((_theme: Theme) =>
  createStyles({
    listItemIcon: {
      fontSize: '1.5rem',
    },
  }),
);

function AppHeaderDrawer(props: AppHeaderDrawerProps) {
  const {drawerOpen, handleDrawerToggle} = props;
  const classes = useStyles();

  return (
    <SwipeableDrawer
      anchor={"bottom"}
      open={drawerOpen}
      onClose={handleDrawerToggle(false)}
      onOpen={handleDrawerToggle(true)}
    >
      <List>
        <ListItem button key={'youtube'} component={'a'} href={'https://www.youtube.com/channel/UCcO7cWx1Mlals3JE0HUrWRA/videos?view_as=subscriber'} target={"_blank"}>
          <ListItemIcon><FontAwesomeIcon icon={faYoutubeSquare} className={classes.listItemIcon} /></ListItemIcon>
          <ListItemText primary={'YouTube'} />
        </ListItem>
        <ListItem button key={'facebook'} component={'a'} href={'https://www.facebook.com/iberioncraft/'} target={"_blank"}>
          <ListItemIcon><FontAwesomeIcon icon={faFacebookSquare} className={classes.listItemIcon} /></ListItemIcon>
          <ListItemText primary={'Facebook'} />
        </ListItem>
        <ListItem button key={'discord'} component={'a'} href={'https://discord.gg/2Y8n45P'} target={"_blank"}>
          <ListItemIcon><FontAwesomeIcon icon={faDiscord} className={classes.listItemIcon} /></ListItemIcon>
          <ListItemText primary={'Discord'} />
        </ListItem>
      </List>
    </SwipeableDrawer>
  );
}

export default AppHeaderDrawer;