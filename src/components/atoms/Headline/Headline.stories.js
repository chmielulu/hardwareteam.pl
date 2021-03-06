import React from "react";
import { withKnobs, select, text } from "@storybook/addon-knobs";
import { primary, secondary, tertiary } from "@constants/kinds";
import { allSizes, l as defaultSize } from "@constants/fontSizes";
import Headline from "./Headline";

export default {
  title: "atoms/Headline",
  decorators: [withKnobs],
};

export const withHeadline = () => {
  const kind = select("Kind", [primary, secondary, tertiary], primary);
  const label = text("Label", "Popularne w tym tygodniu");
  const fontSize = select("Font size", allSizes, defaultSize);

  return (
    <div style={{ width: "50vw" }}>
      <Headline kind={kind} fontSize={fontSize}>
        {label}
      </Headline>
    </div>
  );
};
