import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "@themes/theme";
import GlobalStyles from "@themes/GlobalStyles";

const MainTemplate = ({ children }) => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  </>
);

export default MainTemplate;
