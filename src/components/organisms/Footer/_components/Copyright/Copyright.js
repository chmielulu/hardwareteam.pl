import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useFluidSize, useFontSize } from "@hooks/styled-components";

const StyledWrapper = styled.div`
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.lightGray};
  display: flex;
  justify-content: center;
  padding: 20px 0;
  align-items: center;
  margin-top: 50px;

  @media (max-width: 1024px) {
    border-top: 0;
    margin-top: 30px;
    padding: 0 0 20px;
  }
`;

const StyledInnerWrapper = styled.div`
  width: 80%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1024px) {
    flex-direction: column;
    width: 100%;
    justify-content: center;
  }
`;

const StyledText = styled.div`
  ${({ theme }) => useFontSize(theme)}
  font-weight: 300;
`;

const StyledTextSpan = styled.span`
  font-weight: 400;
`;

const StyledImagesWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1024px) {
    margin-top: 10px;
  }
`;

const StyledImage = styled.img`
  max-width: 50px;
  max-height: 40px;
  margin-right: 10px;

  :last-of-type {
    margin-right: 0;
  }

  @media (max-width: 1024px) {
    max-width: ${useFluidSize({ min: 40, max: 50 })};
    max-height: ${useFluidSize({ min: 30, max: 40 })};
  }

  @media (max-width: 360px) {
    max-width: 40px;
    max-height: 30px;
  }
`;

const Copyright = ({ copyrightImages }) => {
  return (
    <StyledWrapper>
      <StyledInnerWrapper>
        <StyledText>
          Copyright 2020 - <StyledTextSpan>Hardware Team</StyledTextSpan> - All
          right reserved.
        </StyledText>
        <StyledImagesWrapper>
          {copyrightImages.map((image, index) => (
            <StyledImage src={image} key={index} />
          ))}
        </StyledImagesWrapper>
      </StyledInnerWrapper>
    </StyledWrapper>
  );
};

Copyright.propTypes = {
  copyrightImages: PropTypes.array.isRequired,
};

export default Copyright;
