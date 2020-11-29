import React from "react";
import { StoryRouter } from "storybook-react-router";
import Pagination from "./Pagination";

export default {
  title: "atoms/Pagination",
  decorators: [
    (Story) => (
      <StoryRouter>
        <Story />
      </StoryRouter>
    ),
  ],
};

export const withPagination = () => (
  <Pagination next="/" min={1} max={16} current={1} />
);
