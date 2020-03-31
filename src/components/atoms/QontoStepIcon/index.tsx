import React from "react";
import { StepIconProps } from '@material-ui/core/StepIcon';
import {makeStyles} from "@material-ui/styles";
import {createStyles, Theme} from "@material-ui/core";
import clsx from "clsx";
import {Check} from "@material-ui/icons";

const useQontoStepIconStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    color: '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
  },
  active: {
    color: theme.palette.secondary.dark,
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
  completed: {
    color: theme.palette.secondary.dark,
    zIndex: 1,
    fontSize: 18,
  },
}));

function QontoStepIcon(props: StepIconProps) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
    </div>
  );
}

export default QontoStepIcon;