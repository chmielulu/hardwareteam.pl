import React from "react";
import styled from "styled-components";
import { PromotionCard } from "@components/molecules";
import { secondPromotion } from "../../_dummyContent/dummyContent";

const StyledWrapper = styled.div`
  display: flex;
  width: 85%;
  max-width: 1600px;
  margin: 100px auto;
  justify-content: space-between;

  div {
    box-shadow: none;
  }
`;

const SecondPromotion = () => {
  return (
    <StyledWrapper>
      {secondPromotion.map((props, index) => (
        <PromotionCard key={index} {...props} />
      ))}
    </StyledWrapper>
  );
};

export default SecondPromotion;
