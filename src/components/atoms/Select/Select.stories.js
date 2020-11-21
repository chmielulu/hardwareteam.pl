import React from "react";
import { withKnobs, select } from "@storybook/addon-knobs";
import { primary, secondary } from "@constants/kinds";
import Select from "./Select";

const options = [
  "Sortowanie domyślne",
  "Cena - od najniżej",
  "Cena - od najwyżej",
  "Po popularności",
  "Po ocenach klientów",
  "Po ilości komentarzy",
];

export default {
  title: "atoms/Select",
  decorators: [withKnobs],
};

export const withSelect = () => {
  const kind = select("Kind", [primary, secondary], primary);

  return (
    <div style={{ width: "215px" }}>
      <Select options={options} kind={kind} />
    </div>
  );
};
