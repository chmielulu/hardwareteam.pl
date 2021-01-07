import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { primary, secondary } from "@constants/kinds";
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

  ${({ $kind }) =>
    $kind === secondary &&
    css`
      max-width: 1500px;
      width: 90%;
    `}
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

  ${({ $kind }) =>
    $kind === secondary &&
    css`
      justify-content: center;
      width: 100%;
      max-width: unset;
    `}
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

const Copyright = ({ copyrightImages, kind }) => {
  return (
    <StyledWrapper $kind={kind}>
      <StyledInnerWrapper $kind={kind}>
        <StyledText>
          Copyright 2021 - <StyledTextSpan>Hardware Team</StyledTextSpan> - All
          right reserved.
        </StyledText>

        {kind === primary && (
          <StyledImagesWrapper>
            {copyrightImages.map((image, index) => (
              <StyledImage src={image} key={index} />
            ))}
          </StyledImagesWrapper>
        )}
      </StyledInnerWrapper>
    </StyledWrapper>
  );
};

Copyright.propTypes = {
  copyrightImages: PropTypes.array,
  kind: PropTypes.oneOf([primary, secondary]),
};

Copyright.defaultProps = {
  kind: primary,
  copyrightImages: [],
};

export default Copyright;
