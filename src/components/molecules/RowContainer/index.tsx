import React, {ReactNode} from "react";
import {Container, Grid} from "@material-ui/core";
import {GalleryElement, isExtraWideElement, isWideElement} from "../../organisms/Gallery/types";

export interface RowContainerProps {
  childs: GalleryElement[],
  anchorId?: string,
  renderElement: (galleryElement: GalleryElement, index: number) => ReactNode,
}

function RowContainer(props: RowContainerProps) {
  const {anchorId, childs, renderElement} = props;

  return (
    <Container maxWidth={'lg'} id={anchorId}>
      <Grid container direction={"row"} wrap={"wrap"} justify={"space-around"}>
        {childs.map(
          (galleryElement: GalleryElement, index: number) => {
            const wide = isWideElement(galleryElement) ? galleryElement.wide : false;
            const extraWide = isExtraWideElement(galleryElement) ? galleryElement.extraWide : false;
            const md = extraWide ? 8 : 6;
            const lg = extraWide ? 6 : (wide ? 5 : 4);

            return (
              <Grid
                key={index}
                item xs={12} md={md} lg={lg}
                container justify={"space-around"}
              >
                {renderElement(galleryElement, index)}
              </Grid>
            );
          }
        )}
      </Grid>
    </Container>
  );
}

export default RowContainer;