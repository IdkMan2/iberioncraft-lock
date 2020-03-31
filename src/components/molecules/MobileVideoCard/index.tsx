import React from "react";
import {Box} from "@material-ui/core";
import VideoCard, {VideoCardProps} from "../VideoCard";
import {makeStyles, Theme} from "@material-ui/core/styles";
import {createStyles} from "@material-ui/styles";

export interface MobileVideoCardProps extends VideoCardProps {

}

const useStyles = makeStyles((theme: Theme) => createStyles({
  box: {
    width: '100%',
    margin: theme.spacing(4, 1),
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(4),
    },
  },
}));

function MobileVideoCard(props: MobileVideoCardProps) {
  const {...photoCardProps} = props;
  const classes = useStyles();

  return (
    <Box className={classes.box} >
      <VideoCard {...photoCardProps} />
    </Box>
  );
}

export default MobileVideoCard;