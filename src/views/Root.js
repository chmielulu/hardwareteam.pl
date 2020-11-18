import React from "react";
import MainTemplate from "@templates/MainTemplate";
import { Select } from "@components/atoms";
import { primary, secondary } from "@constants/types";

const options = [
  "Sortowanie domyślne",
  "Cena - od najniżej",
  "Cena - od najwyżej",
  "Po popularności",
  "Po ocenach klientów",
  "Po ilości komentarzy",
];

const Root = () => (
  <MainTemplate>
    <div
      style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "215px", marginRight: "20px" }}>
        <Select options={options} type={primary} />
      </div>
      <div style={{ width: "215px", marginRight: "20px" }}>
        <Select options={options} type={secondary} />
      </div>
    </div>
  </MainTemplate>
);

export default Root;
