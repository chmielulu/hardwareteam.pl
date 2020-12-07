import React, { useEffect } from "react";
import PropTypes from "prop-types";
import BasicTemplate from "./BasicTemplate";

const MainTemplate = ({ children }) => {
  useEffect(() => {
    const bodyStyle = document.body.style;
    bodyStyle.overflow = "";
  }, []);

  return (
    <BasicTemplate>
      <main>{children}</main>
    </BasicTemplate>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainTemplate;
