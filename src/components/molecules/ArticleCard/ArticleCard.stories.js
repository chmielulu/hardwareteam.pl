import React from "react";
import { withKnobs, text, files, date, number } from "@storybook/addon-knobs";
import articleImg from "@assets/images/articleCard.png";
import { StoryRouter } from "storybook-react-router";

import ArticleCard from "./ArticleCard";

export default {
  title: "molecules/ArticleCard",
  decorators: [
    withKnobs,
    (Story) => (
      <StoryRouter>
        <Story />
      </StoryRouter>
    ),
  ],
};

export const withArticleCard = () => {
  const name = text("Title", "Motorola – dwa nowe budżetowe telefony");
  const img = files("Feature image", ".png, .jpg, .webp", [articleImg]);
  const content = text(
    "Content",
    "Moto G8 jeszcze na całym świecie nie miał premiery, a Motorola dodatkowo wprowadza dwa nowe budżetowe modele. W ofercie"
  );
  const dateProp = date("Date", new Date("Jan 20 2020"));
  const readTime = number("Read time", 10);
  const link = "/";

  return (
    <ArticleCard
      name={name}
      img={img}
      content={content}
      date={dateProp}
      readTime={readTime}
      link={link}
    />
  );
};
