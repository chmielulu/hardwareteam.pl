import React from "react";
import { withKnobs, select, boolean } from "@storybook/addon-knobs";
import SocialButton from "./SocialButton";
import { kinds } from "./kinds";

export default {
  title: "atoms/SocialButton",
  decorators: [withKnobs],
};

export const withSocialButton = () => {
  const kind = select("Kind", kinds, kinds[0]);
  const secondary = boolean("Secondary", false);

  return <SocialButton kind={kind} secondary={secondary} />;
};
