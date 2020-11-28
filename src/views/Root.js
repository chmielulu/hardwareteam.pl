import React from "react";
import styled from "styled-components";
import MainTemplate from "@templates/MainTemplate";
import Navigation from "@components/organisms/Navigation/Navigation";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductCard } from "@components/molecules";

const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 5%;

  @media (max-width: 320px) {
    padding: 20px 0;
  }

  @media (max-width: 300px) {
    overflow-x: scroll;
  }
`;

const Root = () => (
  <MainTemplate>
    <Router>
      <Navigation />
      <div className="main-wrapper">
        <Wrapper>
          <ProductCard />
        </Wrapper>
      </div>
    </Router>
  </MainTemplate>
);

export default Root;
