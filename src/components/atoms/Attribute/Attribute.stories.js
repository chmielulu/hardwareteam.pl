import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import Attribute from "./Attribute";

export default {
  title: "atoms/Attribute",
  decorators: [withKnobs],
};

export const withScore = () => {
  const name = text("Name", "Procesor");
  const value = text("Value", "MediaTek MT6762R Helio P22");

  return <Attribute name={name} value={value} />;
};
