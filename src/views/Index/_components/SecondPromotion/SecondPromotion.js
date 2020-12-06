import React from "react";
import styled from "styled-components";
import { PromotionCard, CustomSwiper } from "@components/molecules";
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
`;

const SecondPromotion = () => {
  return (
    <StyledWrapper>
      <CustomSwiper spaceBetween={40}>
        {secondPromotion.map((props, index) => (
          <PromotionCard key={index} {...props} />
        ))}
      </CustomSwiper>
    </StyledWrapper>
  );
};

export default SecondPromotion;
