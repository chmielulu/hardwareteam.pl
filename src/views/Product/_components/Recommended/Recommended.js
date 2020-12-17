import React from "react";
import styled from "styled-components";
import { Headline } from "@components/atoms";
import { ProductCard, CustomSwiper } from "@components/molecules";
import { secondary } from "@constants/kinds";
import { recommendedProducts } from "../../../Index/_dummyContent/dummyContent";

const StyledWrapper = styled.section`
  margin-top: 80px;
`;

const StyledSliderWrapper = styled.div`
  margin-top: 30px;
`;

const Recommended = () => {
  return (
    <StyledWrapper>
      <Headline as="h3" kind={secondary}>
        Rekomendowane akcesoria
      </Headline>
      <StyledSliderWrapper>
        <CustomSwiper>
          {recommendedProducts[0].map((props, index) => (
            <ProductCard key={index} kind={secondary} titleAs="h4" {...props} />
          ))}
        </CustomSwiper>
      </StyledSliderWrapper>
    </StyledWrapper>
  );
};

export default Recommended;
