import React from "react";
import { withKnobs, select, text } from "@storybook/addon-knobs";
import heartLine from "@iconify-icons/clarity/heart-line";
import { primary, secondary, tertiary } from "@constants/types";
import Button from "./Button";

export default {
  title: "atoms/Button",
  decorators: [withKnobs],
};

export const withButton = () => {
  const type = select("Type", [primary, secondary, tertiary], primary);
  const icon = select("Icon", ["unset", "heartLine"], "unset");
  const position = select("Position", ["left", "right"], "left");
  const label = text("Label", "Click me");
  const fullWidth = select("Full Width", [false, true], false);

  return (
    <div style={{ display: "flex", width: "400px" }}>
      <Button
        type={type}
        icon={icon !== "unset" && heartLine}
        position={position}
        fullWidth={fullWidth}
      >
        {label}
      </Button>
    </div>
  );
};
