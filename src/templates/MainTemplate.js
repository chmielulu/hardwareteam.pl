import React from "react";
import PropTypes from "prop-types";
import { Navigation, Footer } from "@components/organisms";
import dummyFooterContent from "@components/organisms/Footer/dummyContent";
import BasicTemplate from "./BasicTemplate";

const MainTemplate = ({ children }) => (
  <BasicTemplate>
    <Navigation />
    <div className="main-wrapper">
      <main>{children}</main>
      <Footer
        brands={dummyFooterContent.brands}
        copyrightImages={dummyFooterContent.copyrightImages}
      />
    </div>
  </BasicTemplate>
);

MainTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainTemplate;
