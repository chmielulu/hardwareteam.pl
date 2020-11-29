import React from "react";
import { StoryRouter } from "storybook-react-router";
import BackButton from "./BackButton";

export default {
  title: "atoms/BackButton",
  decorators: [
    (Story) => (
      <StoryRouter>
        <Story />
      </StoryRouter>
    ),
  ],
};

export const withBackButton = () => (
  <BackButton to="/">Wróć do zakupów</BackButton>
);
