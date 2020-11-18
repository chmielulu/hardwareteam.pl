import React from "react";
import styled from "styled-components";
import { withKnobs, select, text } from "@storybook/addon-knobs";
import heart from "@iconify-icons/clarity/heart-solid";
import Input from "./Input";

export default {
  title: "atoms/Input",
  decorators: [withKnobs],
};

const StyledInput = styled(Input)`
  width: 255px;
`;

export const withInput = () => {
  const label = text("Label", "Adres e-mail");
  const icon = select("Icon", ["none", "heart"], "heart");

  return (
    <StyledInput label={label} icon={icon === "heart" && heart} name="email" />
  );
};
