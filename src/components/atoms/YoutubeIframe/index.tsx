import React from "react";

export interface YoutubeIframeProps {
  image?: string;
  src?: string;
  height?: number,
  width?: number,
  allow?: string,
  style?: YoutubeIframeStyle,
}
interface YoutubeIframeStyle {
  backgroundImage?: string,
}

const defaultAllow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";

function YoutubeIframe(props: YoutubeIframeProps) {
  const {src, image, height, width, allow, style} = props;
  const url = src ? src : image ? image : style && style.backgroundImage ? style.backgroundImage.substring(5, style.backgroundImage.length - 2) : '';

  return (
   <iframe
    height={height ? height : 240}
    width={width ? width : '100%'}
    src={url}
    frameBorder={0}
    allow={allow ? allow : defaultAllow}
    allowFullScreen
   >

   </iframe>
  );
}

export default YoutubeIframe;