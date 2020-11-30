import React from "react";
import { withKnobs, number } from "@storybook/addon-knobs";
import styled from "styled-components";
import Slider from "./Slider";

export default {
  title: "atoms/Slider",
  decorators: [withKnobs],
};

const StyledSlider = styled(Slider)``;

export const withSlider = () => {
  const min = number("Minimum value", 3636);
  const max = number("Maximum value", 17954);

  return <StyledSlider min={min} max={max} />;
};
