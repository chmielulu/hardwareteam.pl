import React from "react";
import styled from "styled-components";
import { PromotionCard, CustomSwiper } from "@components/molecules";
import { useWindowSize } from "@hooks/utils";
import { secondPromotion } from "../../_dummyContent/dummyContent";

const StyledWrapper = styled.div`
  display: flex;
  width: 85%;
  max-width: 1500px;
  margin: 100px auto;
  justify-content: space-between;

  div {
    box-shadow: none;
  }

  @media (max-width: 1550px) {
    margin: 60px auto;
  }

  @media (max-width: 1024px) {
    max-width: 100%;
    width: 90%;
    margin: auto;
    height: unset;

    .swiper-container {
      width: 100%;
      height: 100%;
      display: flex;
    }

    .swiper-wrapper {
      display: inline-flex;
      height: 100%;
      flex-shrink: 0;
    }

    .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;

      div {
        box-shadow: none;
        border-radius: none;
      }
    }
  }
`;

const SecondPromotion = () => {
  const { width } = useWindowSize();

  return (
    <StyledWrapper>
      <CustomSwiper
        spaceBetween={width <= 1024 ? 0 : 40}
        freeMode={width > 1024}
      >
        {secondPromotion.map((props, index) => (
          <PromotionCard key={index} {...props} />
        ))}
      </CustomSwiper>
    </StyledWrapper>
  );
};

export default SecondPromotion;
