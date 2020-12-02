import React from "react";
import {
  withKnobs,
  text,
  date,
  number,
  boolean,
  files,
} from "@storybook/addon-knobs";
import comment1Img from "@assets/images/comment1.png";
import comment2Img from "@assets/images/comment2.png";
import Comment from "./Comment";

export default {
  title: "molecules/Comment",
  decorators: [withKnobs],
};

export const withComment = () => {
  const userName = text("User name", "Andrzej");
  const dateProp = date("Date", new Date("December 2, 2020 07:24:00"));
  const content = text(
    "Content",
    "Bateria trzyma równe dwa dni. Robię sporo zdjęć i korzystam z internetu, jak dla mnie ten wynik jest bardzo dobry. Telefon może służyć też jako powerbank - całkiem przydatna funkcja."
  );
  const isProductComment = boolean("Product Comment", true);

  const likeCount = number("Likes count", 4);
  const dislikeCount = number("Dislikes count", 1);
  const isConfirmed = boolean("Confirmed", true);
  const score = number("Score", 5);
  const images = files("Images", ".png, .jpg, .webp", [
    comment1Img,
    comment2Img,
  ]);

  const productOptions = {
    isConfirmed,
    score,
    images,
  };

  return (
    <Comment
      userName={userName}
      date={dateProp}
      content={content}
      likeCount={likeCount}
      dislikeCount={dislikeCount}
      productOptions={isProductComment ? productOptions : undefined}
    />
  );
};
