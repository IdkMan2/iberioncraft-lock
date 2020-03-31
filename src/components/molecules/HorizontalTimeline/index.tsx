import React from "react";
import {makeStyles, Theme} from "@material-ui/core/styles";
import {createStyles} from "@material-ui/styles";
import {Step, StepLabel, Stepper, Typography} from "@material-ui/core";
import QontoStepIcon from "../../atoms/QontoStepIcon";

export interface HorizontalTimelineProps {
  date: string,
  anchorId?: string,
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    width: '100%',
  },
  stepper: {
    paddingBottom: theme.spacing(1),
    paddingLeft: 0, paddingRight: 0,
  },
  stepLabelContainer: {
    '& span': {
      marginTop: `${theme.spacing(1)}px!important`,
    },
  },
}));

function HorizontalTimeline(props: HorizontalTimelineProps) {
  const classes = useStyles();
  const {date, anchorId} = props;
  const steps = ['', date, ''];

  return (
    <div className={classes.root} id={anchorId}>
      <Stepper activeStep={1} alternativeLabel className={classes.stepper}>
        {steps.map((label, index) => (
          <Step
            key={label}
            completed={index === steps.length}
          >
            <StepLabel
              StepIconComponent={QontoStepIcon}
              classes={{
                labelContainer: classes.stepLabelContainer,
              }}
            >
              <Typography variant={"body1"} color={"secondary"}>
                {label}
              </Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}

export default HorizontalTimeline;