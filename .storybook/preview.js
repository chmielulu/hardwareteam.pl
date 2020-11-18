import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "@themes/theme";

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  layout: "centered",
};
