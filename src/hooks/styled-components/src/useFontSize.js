/* eslint-disable no-param-reassign */
import { css } from "styled-components";
import { defaultSize } from "@constants/fontSizes";

const fluidFontSize = (min, max, minView, maxView) =>
  `calc(${min}rem + (${max * 10} - ${
    min * 10
  }) * ((100vw - ${minView}px) / (${maxView} - ${minView})))`;

const useFontSize = (
  theme,
  desktopFontSize = defaultSize,
  mobileFontSize = desktopFontSize,
  hiDpiFontSize = desktopFontSize
) => css`
  font-size: ${`${theme.desktop[desktopFontSize]}rem`};

  @media (min-width: 1921px) and (max-width: 3839px) {
    font-size: ${fluidFontSize(
      theme.desktop[desktopFontSize],
      theme.hiDpi[hiDpiFontSize],
      1921,
      3839
    )};
  }

  @media (min-width: 3840px) {
    font-size: ${`${theme.hiDpi[hiDpiFontSize]}rem`};
  }

  @media (min-width: 361px) and (max-width: 768px) {
    font-size: ${fluidFontSize(
      theme.mobile[mobileFontSize],
      theme.desktop[desktopFontSize],
      361,
      768
    )};
  }

  @media (max-width: 360px) {
    font-size: ${`${theme.mobile[mobileFontSize]}rem`};
  }
`;

export default useFontSize;
