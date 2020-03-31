import React from "react";
import {Tooltip} from "@material-ui/core";
import {TooltipProps} from "@material-ui/core/Tooltip/Tooltip";

type StrippedTooltipProps = TooltipProps
  & Omit<TooltipProps, 'arrow' | 'disableHoverListener' | 'disableFocusListener' | 'disableTouchListener'>;

export interface ManualArrowTooltipProps extends StrippedTooltipProps {}

export function ManualArrowTooltip(props: ManualArrowTooltipProps) {
  return (
    <Tooltip
      arrow
      disableHoverListener
      disableFocusListener
      disableTouchListener
      {...props}
    />
  );
}