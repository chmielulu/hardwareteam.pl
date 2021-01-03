import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import { theme } from "@themes/theme";
import GlobalStyles from "@themes/GlobalStyles";

const MainTemplate = ({ children }) => {
  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainTemplate;
