import React from "react";
import PhotoCard, {PhotoCardProps} from "../PhotoCard";
import {Box} from "@material-ui/core";
import {makeStyles, Theme} from "@material-ui/core/styles";
import {createStyles} from "@material-ui/styles";

export interface MobilePhotoCardProps extends PhotoCardProps {

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

function MobilePhotoCard(props: MobilePhotoCardProps) {
  const {...photoCardProps} = props;
  const classes = useStyles();

  return (
    <Box className={classes.box} >
      <PhotoCard {...photoCardProps} />
    </Box>
  );
}

export default MobilePhotoCard;