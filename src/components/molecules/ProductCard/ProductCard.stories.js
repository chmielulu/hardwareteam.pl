import React from "react";
import styled from "styled-components";
import {
  withKnobs,
  text,
  object,
  number,
  files,
  optionsKnob as options,
  select,
} from "@storybook/addon-knobs";
import productImg from "@assets/images/huaweiPhone.png";
import { primary, allKinds } from "@constants/kinds";
import { StoryRouter } from "storybook-react-router";
import ProductCard from "./ProductCard";

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 5%;

  @media (max-width: 320px) {
    padding: 20px 0;
  }

  @media (max-width: 300px) {
    overflow-x: scroll;
  }
`;

export default {
  title: "molecules/ProductCard",
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
  const name = text(
    "Product name",
    "Smartfon Huawei Y6P 64GB Dual SIM Fioletowy"
  );
  const img = files("Product photo", ".jpg, .png, .webp", [productImg]);
  const attributes = object("Product attributes", [
    { name: "Ekran", value: '6,3"' },
    { name: "Procesor", value: "MediaTek MT6762R Helio P22" },
    { name: "Pamięć RAM", value: "3GB" },
    { name: "Pamięć wbudowana", value: "64GB" },
    { name: "System", value: "Android 10" },
  ]);
  const score = number("Score", 5, { range: true, min: 0, max: 5, step: 0.1 });
  const reviewsCount = number("Reviews count", 2);
  const price = number("Price", 559);
  const informations = options(
    "Informations",
    { time: "time", delivery: "delivery" },
    ["time", "delivery"],
    { display: "check" }
  );

  const awards = options(
    "Awards",
    {
      recommendable: "recommendable",
      bestseller: "bestseller",
      envFriendly: "envFriendly",
      a11yAdapted: "a11yAdapted",
      valueForMoney: "valueForMoney",
    },
    ["recommendable", "bestseller", "valueForMoney"],
    { display: "check" }
  );
  const discount = number("Discount", undefined);
  const kind = select("Kind", allKinds, primary);
  const size = select("Size", ["big", "normal", "small"], "normal");

  return (
    <Wrapper>
      <ProductCard
        name={name}
        img={img}
        attributes={attributes}
        score={score}
        reviewsCount={reviewsCount}
        price={price}
        informations={informations}
        awards={awards}
        discount={discount}
        kind={kind}
        size={size}
        render={() => <span>Hell0 world</span>}
      />
    </Wrapper>
  );
};
