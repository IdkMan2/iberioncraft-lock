import {Box, Container} from "@material-ui/core";
import React from "react";
import Quote, {QuoteProps} from "../../atoms/Quote";

export interface MobileQuoteCardProps extends QuoteProps {

}

function MobileQuoteCard(props: MobileQuoteCardProps) {
  const {...quoteProps} = props;

  return (
    <Container maxWidth={"md"}>
      <Box mt={4} mb={4}>
        <Quote {...quoteProps} />
      </Box>
    </Container>
  );
}

export default MobileQuoteCard;