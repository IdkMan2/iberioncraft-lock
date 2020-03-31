import {makeStyles} from "@material-ui/styles";
import {createStyles, Theme, Typography} from "@material-ui/core";
import React from "react";

export interface QuoteProps {
  content: string,
  author?: string,
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
    color: theme.palette.common.black,
    backgroundColor: '#fdf5e6',
    borderLeft: `6px solid ${theme.palette.secondary.light}`,
    fontStyle: 'italic',
    display: 'flex',
    flexFlow: 'column nowrap',
  },
  hContent: {
    fontSize: '1.2rem',
    [theme.breakpoints.up('md')]: {
      fontSize: '1.4rem',
    },
  },
  pAuthor: {
    alignSelf: 'flex-end',
  },
}));

function Quote(props: QuoteProps) {
  const classes = useStyles();
  const {content, author} = props;

  return (
    <div className={classes.root}>
      <Typography variant={"subtitle1"} className={classes.hContent}>
        {content}
      </Typography>
      {author && (
        <Typography variant={"subtitle1"} className={classes.pAuthor}>{author}</Typography>
      )}
    </div>
  );
}

export default Quote;