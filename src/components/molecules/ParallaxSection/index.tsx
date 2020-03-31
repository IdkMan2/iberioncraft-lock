import React from "react";
import {makeStyles, Theme} from "@material-ui/core/styles";
import {createStyles, useTheme} from "@material-ui/styles";
import {Container, Fab, Grid, useMediaQuery} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import {CropOriginal} from "@material-ui/icons";

export interface ParallaxSectionProps {
  title: string,
  subtitle?: string | string[],
  image: string,
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: (props: ParallaxSectionProps) => ({
    backgroundImage: `url("${props.image}")`,
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '500px',
    [theme.breakpoints.down('sm')]: {
      backgroundAttachment: 'scroll',
      height: '350px',
    },
  }),
  card: {
    position: 'relative',
    maxWidth: 425,
    padding: theme.spacing(2, 1, 3 , 1),
    overflow: 'visible',
  },
  cardFab: {
    position: 'absolute',
    top: 0,
    right: 0,
    transform: 'translate(-35%, -35%)',
  },
}));

function ParallaxSection(props: ParallaxSectionProps) {
  const {title, subtitle} = props;
  const classes = useStyles(props);
  const theme: Theme = useTheme();
  const mediaSmDown = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid
      container
      direction={"column"} wrap={"nowrap"}
    >
      <Grid
        item container
        direction={"row"} wrap={"nowrap"}
        className={classes.root}
      >
        {!mediaSmDown && (
          <React.Fragment>
            <Grid item md={6} />
            <Grid item md={6} container direction={"column"} wrap={"nowrap"} justify={"center"} alignItems={"center"}>
              <Card className={classes.card}>
                <CardContent>
                  <Fab color="secondary" className={classes.cardFab}>
                    <CropOriginal />
                  </Fab>
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
              </Card>
            </Grid>
          </React.Fragment>
        )}
      </Grid>

      {mediaSmDown && (
        <Container maxWidth={"sm"}>
          <Grid item>
            <CardContent>
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
          </Grid>
        </Container>
      )}
    </Grid>
  );
}

export default ParallaxSection;