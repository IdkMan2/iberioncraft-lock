import React, {useCallback} from "react";
import {Grid} from "@material-ui/core";
import {galleryData} from "./content";
import {
  GalleryElement,
  ParallaxSectionElement,
  PhotoCardElement,
  QuoteElement,
  RowContainerElement,
  TimelineElement,
  VideoCardElement
} from "./types";
import MobilePhotoCard from "../../molecules/MobilePhotoCard";
import MobileVideoCard from "../../molecules/MobileVideoCard";
import MobileQuoteCard from "../../molecules/MobileQuoteCard";
import MobileHorizontalTimeline from "../../molecules/MobileHorizontalTimeline";
import MobileParallax from "../../molecules/MobileParallax";
import RowContainer from "../../molecules/RowContainer";

function Gallery() {

  const renderElement = useCallback((galleryElement: GalleryElement, index: number) => {
    const {type, ...galleryElementProps} = galleryElement;

    switch(type) {
      case "row-container": {
        return (
          <RowContainer
            key={index}
            renderElement={renderElement}
            {...(galleryElement as RowContainerElement)}
          />
        );
      }
      case "timeline": {
        return (
          <MobileHorizontalTimeline
            key={index}
            {...galleryElementProps as TimelineElement}
          />
        );
      }
      case "photo-card": {
        return (
          <MobilePhotoCard
            key={index}
            {...galleryElementProps as PhotoCardElement}
          />
        );
      }
      case "video-card": {
        return (
          <MobileVideoCard
            key={index}
            {...galleryElementProps as VideoCardElement}
          />
        );
      }
      case "quote": {
        return (
          <MobileQuoteCard
            key={index}
            {...galleryElementProps as QuoteElement}
          />
        );
      }
      case "parallax-section": {
        return (
          <MobileParallax
            key={index}
            {...galleryElementProps as ParallaxSectionElement}
          />
        );
      }
      default: {
        return null;
      }
    }
  }, []);

  return (
    <Grid container direction={"column"} wrap={"nowrap"}>
      {galleryData.map(renderElement)}
    </Grid>
  );
}

export default Gallery;