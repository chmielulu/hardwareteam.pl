import React from "react";
import MainTemplate from "@templates/MainTemplate";
import { Headline } from "@components/atoms";

const Root = () => (
  <MainTemplate>
    <div
      style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div style={{ width: "50vw" }}>
        <Headline type="tertiary">Popularne w tym tygodniu</Headline>
      </div>
    </div>
  </MainTemplate>
);

export default Root;
