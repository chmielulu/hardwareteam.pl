import React from "react";
import styled from "styled-components";
import MainTemplate from "@templates/MainTemplate";
import { Headline } from "@components/atoms";
import {
  HotShot,
  CustomSwiper,
  ProductCard,
  ArticleCard,
} from "@components/molecules";
import hotShotContent from "@components/molecules/HotShot/dummyContent";
import Promotion from "./_components/Promotion/Promotion";
import WhyUs from "./_components/WhyUs/WhyUs";
import { recommendedProducts, news } from "./_dummyContent/dummyContent";
import SecondPromotion from "./_components/SecondPromotion/SecondPromotion";

const StyledFirstSectionWrapper = styled.div`
  width: 80%;
  max-width: 1600px;
  display: flex;
  margin: auto;
`;

const StyledHotShot = styled(HotShot)`
  margin-right: 50px;
  justify-content: space-around;
`;

const StyledFirstSection = styled.section`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  max-width: 1000px;
`;

const StyledSliderWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  padding: 0 20px;
  margin-top: 30px;

  .swiper-wrapper {
    display: flex;
    align-items: flex-start;
  }
`;

const StyledSection = styled.section`
  width: 80%;
  max-width: 1600px;
  margin: auto;
  margin-top: 50px;
`;

const Index = () => {
  return (
    <MainTemplate>
      <Promotion />
      <WhyUs />
      <StyledFirstSectionWrapper>
        <StyledHotShot {...hotShotContent} />
        <StyledFirstSection>
          <Headline as="h2">Popularne w tym tygodniu</Headline>
          {recommendedProducts.map((item, index) => (
            <StyledSliderWrapper key={index}>
              <CustomSwiper suffix={index}>
                {item.map((props, index) => (
                  <ProductCard key={index} kind="secondary" {...props} />
                ))}
              </CustomSwiper>
            </StyledSliderWrapper>
          ))}
        </StyledFirstSection>
      </StyledFirstSectionWrapper>
      <StyledSection>
        <Headline as="h2">Aktualności</Headline>
        <StyledSliderWrapper>
          <CustomSwiper spaceBetween={30} suffix="news">
            {news.map(({ ...props }, index) => (
              <ArticleCard key={index} {...props} />
            ))}
          </CustomSwiper>
        </StyledSliderWrapper>
      </StyledSection>
      <StyledSection>
        <Headline as="h2">Nowe oferty</Headline>
        <StyledSliderWrapper>
          <CustomSwiper suffix="new">
            {recommendedProducts[0].map((props, index) => (
              <ProductCard key={index} kind="secondary" {...props} />
            ))}
          </CustomSwiper>
        </StyledSliderWrapper>
      </StyledSection>
      <SecondPromotion />
      <StyledSection>
        <Headline as="h2">Polecane dla ciebie</Headline>
        <StyledSliderWrapper>
          <CustomSwiper suffix="recommended">
            {recommendedProducts[0].map((props, index) => (
              <ProductCard key={index} kind="secondary" {...props} />
            ))}
          </CustomSwiper>
        </StyledSliderWrapper>
      </StyledSection>
      <StyledSection>
        <Headline as="h2">Poradniki</Headline>
        <StyledSliderWrapper>
          <CustomSwiper spaceBetween={30} suffix="tutorials">
            {news.map(({ ...props }, index) => (
              <ArticleCard key={index} {...props} />
            ))}
          </CustomSwiper>
        </StyledSliderWrapper>
      </StyledSection>
      <StyledSection>
        <Headline as="h2">Ostatnie przeglądane</Headline>
        <StyledSliderWrapper>
          <CustomSwiper suffix="last">
            {recommendedProducts[0].map((props, index) => (
              <ProductCard key={index} kind="secondary" {...props} />
            ))}
          </CustomSwiper>
        </StyledSliderWrapper>
      </StyledSection>
    </MainTemplate>
  );
};

export default Index;
