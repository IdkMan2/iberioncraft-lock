import Button, {ButtonProps} from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import React from "react";
import useStyles from "./styles";
import {CircularProgressProps} from "@material-ui/core/CircularProgress/CircularProgress";

interface Props extends ButtonProps<'button'> {
  children: React.ReactNode,
  progress?: boolean,
  disabled?: boolean,
  wrapperProps?: React.HTMLAttributes<HTMLSpanElement>,
  progressProps?: CircularProgressProps,
}

//TODO: Możliwość doboru koloru i rozmiaru circular-progress
function ProgressButton(props: Props) {
  const classes = useStyles();
  const { progress, disabled, wrapperProps: userWrapperProps, progressProps: userProgressProps, ...btnProps } = props;
  // Wrapper
  const defaultWrapperProps = {
    className: classes.wrapper,
  };
  const wrapperProps = { ...defaultWrapperProps, ...userWrapperProps };
  // Button
  const shouldBtnBeDisabled = disabled || progress;
  // Progress
  const defaultProgressProps = {
    size: 36,
    className: classes.circularProgress,
  };
  const progressProps = { ...defaultProgressProps, ...userProgressProps };

  return (
    <span {...wrapperProps}>
      <Button disabled={shouldBtnBeDisabled} {...btnProps}>
        {props.children}
      </Button>
      { progress && <CircularProgress {...progressProps} /> }
    </span>
  );
}

ProgressButton.defaultProps = {
  progress: false,
  disabled: false,
  wrapperProps: null,
  progressProps: null,
};

export default ProgressButton;