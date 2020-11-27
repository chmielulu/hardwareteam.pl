import React from "react";
import { withKnobs, select } from "@storybook/addon-knobs";
import Award from "./Award";
import { kinds } from "./kinds";

export default {
  title: "atoms/Award",
  decorators: [withKnobs],
};

export const withAward = () => {
  const kind = select("Kind", kinds, kinds[0]);

  return <Award kind={kind} />;
};
