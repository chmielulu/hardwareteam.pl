import React from "react";
import {
  withKnobs,
  text,
  files,
  number,
  boolean,
} from "@storybook/addon-knobs";
import promotionCard from "@assets/images/promotionCard.png";
import { StoryRouter } from "storybook-react-router";

import PromotionCard from "./PromotionCard";

export default {
  title: "molecules/PromotionCard",
  decorators: [
    withKnobs,
    (Story) => (
      <StoryRouter>
        <Story />
      </StoryRouter>
    ),
  ],
};

export const withPromotionCard = () => {
  const name = text("Title", "Usłysz każdy detal");
  const img = files("Feature image", ".png, .jpg, .webp", [promotionCard]);
  const brandName = text("Brand Name", "noname");
  const discount = number("Discount", 20);
  const secondary = boolean("Secondary", false);
  const link = "/";

  return (
    <PromotionCard
      name={name}
      img={img}
      brandName={brandName}
      discount={discount}
      link={link}
      secondary={secondary}
    />
  );
};
