import React from "react";
import { StoryRouter } from "storybook-react-router";
import { withKnobs, text, files, number } from "@storybook/addon-knobs";
import defaultImg from "@assets/images/categoryCard.jpg";
import CategoryCard from "./CategoryCard";

export default {
  title: "molecules/CategoryCard",
  decorators: [
    withKnobs,
    (Story) => (
      <StoryRouter>
        <Story />
      </StoryRouter>
    ),
  ],
};

export const withProductCard = () => {
  const name = text("Name", "Smartfony i telefony");
  const count = number("Products count", 470);
  const img = files("Image", ".png, .jpg, .webp", defaultImg);
  const link = "/";

  return <CategoryCard name={name} count={count} img={img} link={link} />;
};
