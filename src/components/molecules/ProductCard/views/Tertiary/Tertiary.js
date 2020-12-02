/* eslint-disable react/prop-types */
import { useFontSize, useFluidSize } from "@hooks/styled-components";
import React from "react";
import styled, { css } from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
`;

const StyledImgColumn = styled.div`
  margin-right: 25px;

  ${({ $big }) =>
    $big &&
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

  ${({ $big }) =>
    $big &&
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

const StyledContentColumn = styled.div``;

const StyledName = styled.h3`
  ${({ theme }) => useFontSize(theme, "m", "l")}
  font-weight: 300;
  margin-top: 10px;

  ${({ $big, theme }) =>
    $big &&
    css`
      ${useFontSize(theme, "l")}
      margin-top: 5px;
      width: 80%;
    `}
`;

const StyledRenderWrapper = styled.div`
  margin-top: 18px;

  @media (max-width: 1024px) {
    margin-top: 12px;
  }
`;

const Tertiary = ({ name, img, render, className, big }) => (
  <StyledWrapper className={className}>
    <StyledImgColumn $big={big}>
      <StyledImg src={img} alt={name} $big={big} />
    </StyledImgColumn>
    <StyledContentColumn>
      <StyledName $big={big}>{name}</StyledName>
      <StyledRenderWrapper>{render && render()}</StyledRenderWrapper>
    </StyledContentColumn>
  </StyledWrapper>
);

export default Tertiary;
