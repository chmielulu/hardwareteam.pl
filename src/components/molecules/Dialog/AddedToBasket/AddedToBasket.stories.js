/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { StoryRouter } from "storybook-react-router";
import AddedToBasket from "./AddedToBasket";
import dummyContent from "./dummyContent";

export default {
  title: "molecules/Dialog/AddedToBasket",
  decorators: [
    (Story) => (
      <StoryRouter>
        <Story />
      </StoryRouter>
    ),
  ],
};

export const withAddedToBasket = () => {
  const [isActive, setActive] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setActive(true)}>
        Click to open AddedToBasket
      </button>
      <AddedToBasket
        isActive={isActive}
        onClose={() => setActive(false)}
        addedProduct={dummyContent.addedProduct}
        recommendedProducts={dummyContent.recommendedProducts}
      />
    </>
  );
};
