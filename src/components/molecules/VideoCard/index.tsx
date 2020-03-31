import React from 'react';
import {makeStyles, Theme} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {createStyles} from "@material-ui/styles";
import YoutubeIframe from "../../atoms/YoutubeIframe";
import {CardActions, Chip} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    width: '100%',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexFlow: 'column nowrap',
      height: '100%',
    },
  },
  media: {
    /*paddingTop: '56.25%',*/
  },
  cardContent: {
    flex: 1,
  },
}));

export interface VideoCardProps {
  title: string,
  subtitle?: string | string[],
  video: string,
  tags?: string[],
  extraWide?: boolean,
}

function VideoCard(props: VideoCardProps) {
  const {title, subtitle, video, tags, extraWide} = props;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        component={YoutubeIframe}
        height={extraWide ? 329 : 240}
        image={video}
      />

      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        {subtitle && (
          (Array.isArray(subtitle) ? subtitle : [subtitle]).map((subtitle: string, index: number) => (
            <React.Fragment key={index}>
              <Typography variant="body2" color="textSecondary" component="p">
                {subtitle}
              </Typography>
              <br />
            </React.Fragment>
          ))
        )}
      </CardContent>

      <CardActions>
        {tags && tags.map((tagName: string, index: number) => (
          <Chip key={index} label={tagName} />
        ))}
      </CardActions>
    </Card>
  );
}

export default VideoCard;