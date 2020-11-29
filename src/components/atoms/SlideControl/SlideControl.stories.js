import React from "react";
import SlideControl from "./SlideControl";

export default {
  title: "atoms/SlideControl",
};

export const withSlideControl = () => (
  <SlideControl name="test" label="test" id="test" />
);
