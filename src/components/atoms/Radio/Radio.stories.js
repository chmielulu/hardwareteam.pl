import React from "react";
import Radio from "./Radio";

export default {
  title: "atoms/Radio",
};

export const withRadio = () => (
  <>
    <Radio name="test" id="test1" label="Popularność" />
    <Radio name="test" id="test2" label="Cena - od najniżej" />
  </>
);
