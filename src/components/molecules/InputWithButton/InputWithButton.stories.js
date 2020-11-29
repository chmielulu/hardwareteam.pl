import React from "react";
import InputWithButton from "./InputWithButton";

export default {
  title: "molecules/InputWithButton",
};

export const withInputWithButton = () => (
  <InputWithButton name="discount" label="Kod rabatowy">
    Dodaj
  </InputWithButton>
);
