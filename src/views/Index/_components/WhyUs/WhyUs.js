import React from "react";
import styled from "styled-components";
import Icon from "@iconify/react";
import { useFluidSize, useFontSize } from "@hooks/styled-components";
import { CustomSwiper } from "@components/molecules";
import { whyUs } from "../../_dummyContent/dummyContent";

const StyledWrapper = styled.div`
  width: 90%;
  max-width: 1500px;
  display: flex;
  margin: 50px auto;
  padding: 30px 60px;
  border: 1px solid ${({ theme }) => theme.lightGray};
  border-radius: 10px;
  justify-content: center;

  @media (max-width: 1024px) {
    width: 100%;
    border-left: 0;
    border-right: 0;
    margin: 0 auto 50px;
    border-radius: 0;
    padding: ${useFluidSize({ min: 15, max: 30 })} 5%;
    margin: 0 auto ${useFluidSize({ min: 20, max: 50 })} auto;
  }

  @media (max-width: 360px) {
    padding: 15px 5%;
    margin: 0 auto 20px auto;
  }
`;

const StyledItem = styled.div`
  display: inline-flex;
  flex-shrink: 0;
  justify-content: center;
  min-width: 245px;

  @media (max-width: 1024px) {
    min-width: unset;
  }
`;

const StyledItemText = styled.p`
  display: inline-flex;
  flex-direction: column;
  flex-shrink: 0;
  user-select: none;
`;

const StyledItemHeadline = styled.span`
  ${({ theme }) => useFontSize(theme, "xs")};
  font-weight: 300;
  text-transform: uppercase;
  margin-bottom: 5px;
`;

const StyledItemContent = styled.span`
  ${({ theme }) => useFontSize(theme, "m", "l")};
  font-weight: 500;
  white-space: nowrap;
`;

const StyledIcon = styled(Icon)`
  font-size: 4rem;
  color: ${({ theme }) => theme.secondary};
  margin-right: 10px;
  flex-grow: 1;

  @media (max-width: 1024px) {
    font-size: ${useFluidSize({ min: 3, max: 4, unit: "rem" })};
    margin-right: ${useFluidSize({ min: 5, max: 10 })};
  }

  @media (max-width: 360px) {
    font-size: 3rem;
    margin-right: 5px;
  }
`;

const WhyUs = () => {
  return (
    <StyledWrapper>
      <CustomSwiper withNavigation={false} spaceBetween={50} suffix="whyUs">
        {whyUs.map(({ icon, title, content }, index) => (
          <StyledItem key={index}>
            <StyledIcon icon={icon} />
            <StyledItemText>
              <StyledItemHeadline>{title}</StyledItemHeadline>
              <StyledItemContent>{content}</StyledItemContent>
            </StyledItemText>
          </StyledItem>
        ))}
      </CustomSwiper>
    </StyledWrapper>
  );
};

export default WhyUs;
