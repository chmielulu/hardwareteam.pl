import { css } from "styled-components";
import { defaultSize } from "@constants/fontSizes";

const calcFontSize = (min, max, minWidth, maxWidth) => {
  min = parseFloat(min);
  max = parseFloat(max);
  const incrementSize = (max * 10 - min * 10) / (maxWidth - minWidth);

  return `calc(${min}rem + ${incrementSize}vw)`;
};

const useFontSize = (theme, fontSize = defaultSize) => css`
  font-size: ${`${theme.desktop[fontSize]}rem`};

  @media (min-width: 1921px) and (max-width: 3839px) {
    font-size: ${calcFontSize(
      theme.desktop[fontSize],
      theme.hiDpi[fontSize],
      1920,
      3840
    )};
  }

  @media (min-width: 3840px) {
    font-size: ${theme.hiDpi[fontSize]};
  }
`;

export default useFontSize;
