import {HorizontalTimelineProps} from "../../molecules/HorizontalTimeline";
import {MobilePhotoCardProps} from "../../molecules/MobilePhotoCard";
import {MobileVideoCardProps} from "../../molecules/MobileVideoCard";
import {MobileQuoteCardProps} from "../../molecules/MobileQuoteCard";
import {MobileParallaxProps} from "../../molecules/MobileParallax";
import {RowContainerProps} from "../../molecules/RowContainer";

export interface GalleryElementBase {
  type: 'timeline' | 'photo-card' | 'video-card' | 'quote' | 'row-container' | 'parallax-section',
}
export interface WideElement {
  wide?: boolean,
}
export function isWideElement(element: any): element is WideElement {
  return typeof element.wide === "boolean";
}
export interface ExtraWideElement {
  extraWide?: boolean,
}
export function isExtraWideElement(element: any): element is ExtraWideElement {
  return typeof element.extraWide === "boolean";
}
export interface TimelineElement extends GalleryElementBase, HorizontalTimelineProps {
  type: 'timeline',
}
export interface PhotoCardElement extends GalleryElementBase, MobilePhotoCardProps, WideElement {
  type: 'photo-card',
}
export interface VideoCardElement extends GalleryElementBase, MobileVideoCardProps, ExtraWideElement {
  type: 'video-card',
}
export interface QuoteElement extends GalleryElementBase, MobileQuoteCardProps {
  type: 'quote',
}
export interface RowContainerElement extends GalleryElementBase, Omit<RowContainerProps, 'renderElement'> {
  type: 'row-container',
}
export interface ParallaxSectionElement extends GalleryElementBase, MobileParallaxProps {
  type: 'parallax-section',
}

export type GalleryElement =
  TimelineElement | PhotoCardElement | VideoCardElement |
  QuoteElement | RowContainerElement | ParallaxSectionElement;