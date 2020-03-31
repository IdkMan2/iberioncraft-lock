import React from "react";
import {Box} from "@material-ui/core";
import ParallaxSection, {ParallaxSectionProps} from "../ParallaxSection";

export interface MobileParallaxProps extends ParallaxSectionProps {

}

function MobileParallax(props: MobileParallaxProps) {
  const {...parallaxProps} = props;

  return (
    <Box mt={4} mb={4}>
      <ParallaxSection {...parallaxProps} />
    </Box>
  );
}

export default MobileParallax;