import React, { useEffect } from "react";
import PropTypes from "prop-types";
import BasicTemplate from "./BasicTemplate";

const MainTemplate = ({ children, title, description, keywords, ogImage }) => {
  useEffect(() => {
    const bodyStyle = document.body.style;
    bodyStyle.overflow = "";
  }, []);

  return (
    <BasicTemplate
      title={title}
      description={description}
      keywords={keywords}
      ogImage={ogImage}
    >
      <main>{children}</main>
    </BasicTemplate>
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
  title: undefined,
  description: undefined,
  keywords: undefined,
  ogImage: undefined,
};

export default MainTemplate;
