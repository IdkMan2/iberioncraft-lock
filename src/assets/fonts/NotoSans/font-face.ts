import NotoSansFontBold from "./NotoSans-Bold.ttf";
import NotoSansFontRegular from "./NotoSans-Regular.ttf";
import NotoSansItalic from "./NotoSans-Italic.ttf";
import NotoSansItalicBold from "./NotoSans-BoldItalic.ttf";

export const italic = {
  fontFamily: 'Noto Sans',
  fontStyle: 'italic',
  fontWeight: 'normal',
  src: `url(${NotoSansItalic})`,
};

export const italicBold = {
  fontFamily: 'Noto Sans',
  fontStyle: 'italic',
  fontWeight: 'bold',
  src: `url(${NotoSansItalicBold})`,
};

export const normal = {
  fontFamily: 'Noto Sans',
  fontStyle: 'normal',
  fontWeight: 'normal',
  src: `url(${NotoSansFontRegular})`,
};

export const bold = {
  fontFamily: 'Noto Sans',
  fontStyle: 'normal',
  fontWeight: 'bold',
  src: `url(${NotoSansFontBold})`,
};
