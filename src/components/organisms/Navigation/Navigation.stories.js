import React from "react";
import { StoryRouter } from "storybook-react-router";
import Navigation from "./Navigation";

export default {
  title: "organisms/Navigation",
  decorators: [
    (Story) => (
      <StoryRouter>
        <Story />
      </StoryRouter>
    ),
  ],
};

export const withNavigation = () => <Navigation />;
