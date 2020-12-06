import React from "react";
import styled from "styled-components";
import { CustomSwiper, PromotionCard } from "@components/molecules";
import { promotion } from "../../_dummyContent/dummyContent";

const StyledWrapper = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.lighterGray};
  display: flex;
  justify-content: center;
  padding: 50px 0;
`;

const StyledInnerWrapper = styled.div`
  display: flex;
`;

const StyledSlider = styled.div`
  max-width: 1100px;
  border-radius: 10px;
  overflow: hidden;
  margin-right: 30px;
  box-shadow: ${({ theme }) => theme.shadow};

  button.swiper-next-button {
    right: 20px !important;
  }

  button.swiper-prev-button {
    left: 20px !important;
  }

  @media (max-width: 1800px) {
    max-width: 900px;
  }

  @media (max-width: 1550px) {
    max-width: 700px;
    height: 500px;
  }

  @media (max-width: 1200px) {
    width: 550px;
    margin-right: 20px;
  }
`;

const StyledOthersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Promotion = () => {
  return (
    <StyledWrapper>
      <StyledInnerWrapper>
        <StyledSlider>
          <CustomSwiper freeMode={false} spaceBetween={0} slidesPerView={1}>
            {promotion.slider.map(
              ({ name, brandName, img, discount, link }, index) => (
                <PromotionCard
                  name={name}
                  brandName={brandName}
                  img={img}
                  discount={discount}
                  link={link}
                  secondary
                  key={index}
                />
              )
            )}
          </CustomSwiper>
        </StyledSlider>
        <StyledOthersWrapper>
          {promotion.others.map(
            ({ name, brandName, img, discount, link }, index) => (
              <PromotionCard
                name={name}
                brandName={brandName}
                img={img}
                discount={discount}
                link={link}
                key={index}
              />
            )
          )}
        </StyledOthersWrapper>
      </StyledInnerWrapper>
    </StyledWrapper>
  );
};

export default Promotion;
