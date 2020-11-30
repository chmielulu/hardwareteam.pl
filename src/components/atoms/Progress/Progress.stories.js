import React from "react";
import { withKnobs, number } from "@storybook/addon-knobs";
import Progress from "./Progress";

export default {
  title: "atoms/Progress",
  decorators: [withKnobs],
};

export const withProgress = () => {
  const min = number("Minimum value", 30);
  const max = number("Maximum value", 70);
  const value = number("Value", 40);

  return <Progress value={value} min={min} max={max} />;
};
