/* eslint-disable react/prop-types */
import React from "react";
import styled, { css } from "styled-components";
import { useFontSize, useFluidSize } from "@hooks/styled-components";
import { Score } from "@components/atoms";
import { Link } from "react-router-dom";
import formatPrice from "@utils/formatPrice";
import { useShortenText } from "@hooks/utils";
import BasketButton from "../../_components/BasketButton/BasketButton";

const StyledWrapper = styled.div`
  ${({ theme }) => useFontSize(theme)}
  padding: 30px 30px;
  border: 1px solid transparent;
  border-radius: 10px;
  box-shadow: 0px 2px 25px -13px rgba(0, 0, 0, 0);
  width: 270px;
  height: 380px;
  transition: border-radius 0.2s ease, box-shadow 0.2s ease;
  position: relative;
  overflow: hidden;

  :hover {
    border: 1px solid ${({ theme }) => theme.lightGray};
    box-shadow: 0px 2px 25px -13px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 1024px) {
    width: 190px;
    height: 320px;
    padding: 20px 15px;
    height: unset;

    :hover {
      border: 1px solid transparent;
      box-shadow: 0px 2px 25px -13px rgba(0, 0, 0, 0);
    }
  }

  ${({ $size }) =>
    $size === "small" &&
    css`
      width: 200px;
      height: 290px;

      @media (max-width: 1024px) {
        height: ${useFluidSize({ min: 260, max: 290 })};
        min-height: unset;
      }

      @media (max-width: 360px) {
        height: 240px;
      }
    `}
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const StyledInnerWrapper = styled.div``;

const StyledImg = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin: 0 auto;
  display: block;

  @media (max-width: 1024px) {
    width: 160px;
    height: 160px;
  }

  ${({ $size }) =>
    $size === "small" &&
    css`
      width: 135px;
      height: 135px;

      @media (max-width: 1024px) {
        width: ${useFluidSize({ min: 80, max: 135 })};
        height: ${useFluidSize({ min: 80, max: 135 })};
      }

      @media (max-width: 360px) {
        width: 80px;
        height: 80px;
      }
    `}
`;

const StyledPriceWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 25px;
  margin-bottom: 7px;

  ${({ $size }) =>
    $size === "small" &&
    css`
      margin-top: 15px;
    `}
`;

const StyledPrice = styled.div`
  @media (max-width: 1024px) {
    ${({ theme }) => useFontSize(theme, "m", "l")}
  }

  ${({ $isDiscount }) =>
    $isDiscount &&
    css`
      ${({ theme }) => useFontSize(theme, "s", "m")}
      text-decoration: line-through;
      color: ${({ theme }) => theme.gray};
    `}
`;

const StyledDiscount = styled.div`
  ${({ theme }) => useFontSize(theme, "m", "l")}
  margin-right: 6px;
`;

const StyledName = styled.h3`
  ${({ theme }) => useFontSize(theme)};
  font-weight: 300;
  margin-bottom: 10px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  visibility: visible;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;

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
  size,
  addToBasket,
  titleAs,
  ...props
}) => {
  const shortenName = useShortenText(name, size === "small" ? 30 : 50);

  return (
    <StyledWrapper $size={size} {...props}>
      <StyledLink to={productLink}>
        <StyledImg src={img} alt={name} $size={size} />
        <StyledInnerWrapper>
          <StyledPriceWrapper $size={size}>
            {discount && (
              <StyledDiscount>{formatPrice(discount)}</StyledDiscount>
            )}
            <StyledPrice $isDiscount={!!discount}>
              {formatPrice(price)}
            </StyledPrice>
          </StyledPriceWrapper>
          <StyledName $size={size} as={titleAs || undefined}>
            {shortenName}
          </StyledName>
          <StyledScoreWrapper>
            <StyledScore score={score} />
            <StyledReviewsCounter>({reviewsCount})</StyledReviewsCounter>
          </StyledScoreWrapper>
        </StyledInnerWrapper>
      </StyledLink>
      <StyledBasketButton
        onClick={() =>
          addToBasket({
            name,
            img,
            score,
            reviewsCount,
            price,
            discount,
          })
        }
      />
    </StyledWrapper>
  );
};

export default Secondary;
