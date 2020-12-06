import React from "react";
import PropTypes from "prop-types";
import { Navigation, Footer } from "@components/organisms";
import dummyFooterContent from "@components/organisms/Footer/dummyContent";
import BasicTemplate from "./BasicTemplate";

const MainTemplate = ({ children }) => (
  <BasicTemplate>
    <Navigation />
    <main className="main-wrapper">
      {children}
      <Footer
        brands={dummyFooterContent.brands}
        copyrightImages={dummyFooterContent.copyrightImages}
      />
    </main>
  </BasicTemplate>
);

MainTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainTemplate;
