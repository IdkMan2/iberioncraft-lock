import React, {ReactNode} from "react";
import {Box, Container, createStyles, Divider, Theme, Typography, useMediaQuery, useTheme} from "@material-ui/core";
import MobileHorizontalTimeline from "../MobileHorizontalTimeline";
import {makeStyles} from "@material-ui/styles";

interface StandardTextProps {
  children: ReactNode,
  gutterBottom?: boolean,
  mediaSmDown: boolean,
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  standardTextRoot: (props: StandardTextProps) => ({
    marginBottom: props.gutterBottom === false ? 0 : theme.spacing(2),
  }),
}));

function StandardText(props: StandardTextProps) {
  const {mediaSmDown, children} = props;
  const classes = useStyles(props);

  return (
    <Typography
      variant={mediaSmDown ? 'h6' : 'h5'}
      color={'textSecondary'}
      align={"center"}
      paragraph
      className={classes.standardTextRoot}
    >
      {children}
    </Typography>
  );
}

function LocalDivider() {
  return (
    <Box my={4}>
      <Container maxWidth={'xs'}>
        <Divider />
      </Container>
    </Box>
  );
}

function EndCredits() {
  const theme: Theme = useTheme();
  const mediaSmDown = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container maxWidth={"lg"}>
      <MobileHorizontalTimeline date={''} />
      <Box mt={4} style={{ marginBottom: '20vh' }}>
        <Typography
          variant={"h2"}
          align={"center"}
          gutterBottom
        >
          Dziękujemy
        </Typography>

        <StandardText mediaSmDown={mediaSmDown}>
          Administracji, budowniczym, przyjaciołom serwera<br />
          .. za wszelkie próby pomocy przy serwerze.<br />
        </StandardText>

        <LocalDivider />

        <StandardText mediaSmDown={mediaSmDown}>
          Wszystkim graczom <br />
          .. za wasz poświęcony czas i wspólną zabawę.<br />
        </StandardText>

        <LocalDivider />

        <StandardText mediaSmDown={mediaSmDown}>
          <small>Ale przede wszystkim</small>
        </StandardText>

        <Typography
          variant={'h3'}
          color={'textSecondary'}
          align={"center"}
          paragraph
          gutterBottom={false}
        >
          Tobie
        </Typography>

        <StandardText mediaSmDown={mediaSmDown}>
          Bez Ciebie ten serwer nie był by taki sam.<br />
        </StandardText>

        <Typography
          variant={'h4'}
          color={'textSecondary'}
          align={"center"}
          paragraph
          gutterBottom={false}
          style={{ marginTop: 64 }}
        >
          ✋
        </Typography>
      </Box>
    </Container>
  );
}

export default EndCredits;