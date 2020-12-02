/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
import { useFontSize } from "@hooks/styled-components";
import { Score } from "@components/atoms";
import { Link } from "react-router-dom";
import formatPrice from "../../utils/formatPrice";
import BasketButton from "../../_components/BasketButton/BasketButton";

const StyledWrapper = styled.div`
  ${({ theme }) => useFontSize(theme)}
  padding: 30px 30px;
  border: 1px solid transparent;
  border-radius: 10px;
  box-shadow: 0px 2px 25px -13px rgba(0, 0, 0, 0);
  width: 270px;
  height: 440px;
  transition: border-radius 0.2s ease, box-shadow 0.2s ease;
  position: relative;

  :hover {
    border: 1px solid ${({ theme }) => theme.lightGray};
    box-shadow: 0px 2px 25px -13px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 1024px) {
    width: 190px;
    min-height: 320px;
    padding: 20px 15px;
    height: unset;

    :hover {
      border: 1px solid transparent;
      box-shadow: 0px 2px 25px -13px rgba(0, 0, 0, 0);
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
`;

const StyledImg = styled.img`
  max-width: 200px;
  max-height: 260px;
  margin: auto;
  display: block;

  @media (max-width: 1024px) {
    max-width: 160px;
    max-height: 185px;
  }
`;

const StyledPrice = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 25px;
  margin-bottom: 7px;

  @media (max-width: 1024px) {
    ${({ theme }) => useFontSize(theme, "m", "l")}
  }
`;

const StyledDiscount = styled.div`
  ${({ theme }) => useFontSize(theme, "s", "m")}
  color: ${({ theme }) => theme.gray};
  text-decoration: line-through;
  margin-left: 6px;
`;

const StyledName = styled.h3`
  font-weight: 300;
  margin-bottom: 7px;

  @media (max-width: 1024px) {
    ${({ theme }) => useFontSize(theme, "m", "l")}
  }
`;

const StyledScoreWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledScore = styled(Score)`
  width: 80px;
`;

const StyledBasketButton = styled(BasketButton)`
  position: absolute;
  right: 15px;
  bottom: 10px;
  opacity: 0;

  ${StyledWrapper}:hover & {
    opacity: 1;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

const StyledReviewsCounter = styled.div`
  ${({ theme }) => useFontSize(theme, "s", "m")}
  color: ${({ theme }) => theme.gray};
  margin-left: 7px;
`;

const Secondary = ({
  name,
  img,
  score,
  reviewsCount,
  price,
  discount,
  productLink,
}) => (
  <StyledWrapper>
    <StyledLink to={productLink}>
      <StyledImg src={img} alt={name} />
      <StyledPrice>
        {formatPrice(price)}
        {discount && <StyledDiscount>{formatPrice(discount)}</StyledDiscount>}
      </StyledPrice>
      <StyledName>{name}</StyledName>
      <StyledScoreWrapper>
        <StyledScore score={score} />
        <StyledReviewsCounter>({reviewsCount})</StyledReviewsCounter>
      </StyledScoreWrapper>
    </StyledLink>
    <StyledBasketButton />
  </StyledWrapper>
);

export default Secondary;