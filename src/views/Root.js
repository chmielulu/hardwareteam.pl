import React from "react";
import MainTemplate from "@templates/MainTemplate";
import Navigation from "@components/organisms/Navigation/Navigation";
import { BrowserRouter as Router } from "react-router-dom";

const Root = () => (
  <MainTemplate>
    <Router>
      <Navigation />
    </Router>
  </MainTemplate>
);

export default Root;
