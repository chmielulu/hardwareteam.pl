import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import { theme } from "@themes/theme";
import GlobalStyles from "@themes/GlobalStyles";
import { Helmet } from "react-helmet";
import { basicMetaTags, domain } from "@config";

const getKeywords = (keywords) => {
  let str = "";

  keywords.forEach((keyword) => {
    str += `,${keyword}`;
  });

  return str.slice(1, str.length);
};

const MainTemplate = ({
  children,
  title: titleProp,
  description,
  keywords,
  ogImage,
}) => {
  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  const { href } = window.location;
  const title = titleProp
    ? titleProp + basicMetaTags.suffix
    : basicMetaTags.title;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Helmet>
        {/* HTML Meta Tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={getKeywords(keywords)} />
        <link rel="icon" href={basicMetaTags.logo} />

        {/* Facebook Meta Tags */}
        <meta property="og:url" content={href} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content={ogImage} />
        <meta property="twitter:domain" content={domain} />
        <meta property="twitter:url" content={href} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
      </Helmet>
      {children}
    </ThemeProvider>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  ogImage: PropTypes.string,
};

MainTemplate.defaultProps = {
  title: null,
  description: basicMetaTags.description,
  keywords: basicMetaTags.keywords,
  ogImage: basicMetaTags.ogImage,
};

export default MainTemplate;
