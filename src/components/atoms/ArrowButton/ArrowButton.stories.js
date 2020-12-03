import React from "react";
import ArrowButton from "./ArrowButton";

export default {
  title: "atoms/ArrowButton",
};

export const withArrowButton = () => (
  <div style={{ background: "red" }}>
    <ArrowButton />
  </div>
);
