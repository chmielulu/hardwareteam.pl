import React from "react";
import { withKnobs, number } from "@storybook/addon-knobs";
import Score from "./Score";

export default {
  title: "atoms/Score",
  decorators: [withKnobs],
};

export const withScore = () => {
  const score = number("Score", 5, { range: true, min: 0, max: 5, step: 0.1 });
  return <Score score={score} />;
};
