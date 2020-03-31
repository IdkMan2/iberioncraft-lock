import React from "react";
import {Box} from "@material-ui/core";
import HorizontalTimeline from "../HorizontalTimeline";
import {HorizontalTimelineProps} from "../HorizontalTimeline";

export interface MobileHorizontalTimeline extends HorizontalTimelineProps {

}

function MobileHorizontalTimeline(props: MobileHorizontalTimeline) {
  const {...timelineProps} = props;

  return (
    <Box mt={24} mb={-2}>
      <HorizontalTimeline {...timelineProps} />
    </Box>
  );
}

export default MobileHorizontalTimeline;