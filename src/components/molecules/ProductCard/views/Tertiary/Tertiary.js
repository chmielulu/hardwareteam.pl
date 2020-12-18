/* eslint-disable react/prop-types */
import { useFontSize, useFluidSize } from "@hooks/styled-components";
import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const StyledWrapper = styled.div`
  display: flex;
`;

const StyledImgColumn = styled.div`
  margin-right: 25px;

  ${({ $size }) =>
    $size === "big" &&
    css`
      margin-right: 15px;
    `}

  @media (max-width: 1024px) {
    margin-right: 17px !important;
  }
`;

const StyledImg = styled.img`
  max-width: 100px;
  max-height: 150px;

  ${({ $size }) =>
    $size === "big" &&
    css`
      max-width: 160px;
      max-height: 230px;

      @media (max-width: 1024px) {
        max-width: ${useFluidSize({ min: 85, max: 160 })};
        max-height: ${useFluidSize({ min: 90, max: 230 })};
      }
    `}

  @media (max-width: 1024px) {
    max-width: ${useFluidSize({ min: 85, max: 100 })};
    max-height: ${useFluidSize({ min: 90, max: 150 })};
  }

  @media (max-width: 360px) {
    max-width: 85px !important;
    max-height: 90px !important;
  }
`;

const StyledContentColumn = styled.div`
  flex: 1;
`;

const StyledName = styled.h3`
  ${({ theme }) => useFontSize(theme, "m", "l")}
  font-weight: 300;
  margin-top: 10px;

  ${({ $size, theme }) =>
    $size === "big" &&
    css`
      ${useFontSize(theme, "l")}
      margin-top: 5px;
      width: 80%;
    `}
`;

const StyledRenderWrapper = styled.div`
  margin-top: 10px;

  @media (max-width: 1024px) {
    margin-top: 5px;
  }
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;

const Tertiary = ({ name, img, render, className, size }) => (
  <StyledWrapper className={className}>
    <StyledImgColumn $size={size}>
      <StyledLink to="/produkt/test">
        <StyledImg src={img} alt={name} $size={size} />
      </StyledLink>
    </StyledImgColumn>
    <StyledContentColumn>
      <StyledLink to="/produkt/test">
        <StyledName $size={size}>{name}</StyledName>
      </StyledLink>
      <StyledRenderWrapper>{render && render()}</StyledRenderWrapper>
    </StyledContentColumn>
  </StyledWrapper>
);

export default Tertiary;
