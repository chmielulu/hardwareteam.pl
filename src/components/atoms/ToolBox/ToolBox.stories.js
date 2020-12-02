/* eslint-disable no-console */
import React from "react";
import icon from "@iconify/icons-clarity/coin-bag-line";
import trashIcon from "@iconify/icons-clarity/trash-line";
import { StoryRouter } from "storybook-react-router";
import ToolBox from "./ToolBox";

export default {
  title: "atoms/ToolBox",
  decorators: [
    (Story) => (
      <StoryRouter>
        <Story />
      </StoryRouter>
    ),
  ],
};

export const withToolBox = () => (
  <ToolBox
    content={[
      {
        name: "Faktura VAT",
        icon,
        action: () => console.log("Invoice VAT"),
        link: "/",
      },
      {
        name: "Usuń",
        icon: trashIcon,
        action: () => console.log("Delete"),
        link: "/",
        color: "#ff455e",
      },
    ]}
  />
);
