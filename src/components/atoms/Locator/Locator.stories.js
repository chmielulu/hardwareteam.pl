import React from "react";
import { StoryRouter } from "storybook-react-router";
import Locator from "./Locator";

export default {
  title: "atoms/Locator",
  decorators: [
    (Story) => (
      <StoryRouter>
        <Story />
      </StoryRouter>
    ),
  ],
};

export const withLocator = () => (
  <Locator
    location={[
      { name: "Hardware Team", to: "/" },
      { name: "Telefony i smartwatche", to: "/" },
      { name: "Smartfony i telefony", to: "/" },
    ]}
  />
);
