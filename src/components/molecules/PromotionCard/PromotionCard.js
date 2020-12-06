import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { Button } from "@components/atoms";
import { Link } from "react-router-dom";
import { useFluidSize, useFontSize } from "@hooks/styled-components";

const StyledWrapper = styled.div`
  width: 520px;
  height: 300px;
  box-shadow: ${({ theme }) => theme.shadow};
  overflow: hidden;
  border-radius: 10px;
  position: relative;

  ::before {
    content: "";
    display: block;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: ${({ theme }) => theme.lightGray};
    position: absolute;
    left: -100%;
    top: -100%;
    z-index: 5;
    transition: transform 1s ease, opacity 1s ease;
    opacity: 0;
    transform: translate(0, 0) scale(0.5) skewX(50%);
  }

  :hover::before {
    transform: translate(140%, 65%) scale(1) skewX(0);
    opacity: 1;
  }

  @media (max-width: 1550px) {
    width: 400px;
    height: 235px;

    ::before {
      width: 200px;
      height: 200px;
    }

    :hover::before {
      transform: translate(170%, 90%) scale(1) skewX(0);
    }
  }

  ${({ $secondary }) =>
    $secondary &&
    css`
      width: 1100px;
      height: 630px;

      ::before {
        display: none;
      }

      @media (max-width: 1800px) {
        width: 900px;
      }

      @media (max-width: 1550px) {
        width: 700px;
        height: 500px;
      }

      @media (max-width: 1200px) {
        width: 550px;
      }
    `}

  @media (max-width: 1024px) {
    width: 100%;
    height: ${useFluidSize({ min: 200, max: 550 })};

    ::before {
      display: none;
    }
  }
`;

const StyledBackground = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 2s ease-in-out;

  ${StyledWrapper}:hover & {
    transform: scale(1.1);
  }

  ${({ $secondary }) =>
    $secondary &&
    css`
      transform: scale(1) !important;
    `}

  @media (max-width: 1024px) {
    transform: scale(1) !important;
  }
`;

const StyledInnerWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 50%;
  height: 100%;
  padding-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 10;

  @media (max-width: 1550px) {
    width: 80%;
  }

  ${({ $secondary }) =>
    $secondary &&
    css`
      padding-left: 120px;

      @media (max-width: 1800px) {
        padding-left: 60px;
      }

      @media (max-width: 1550px) {
        width: 70%;
      }

      @media (max-width: 1200px) {
        width: 85%;
      }
    `}
`;

const StyledDiscount = styled.span`
  ${({ theme }) => useFontSize(theme, "m", "xs")}
  font-weight: 300;
  color: ${({ theme }) => theme.secondary};

  ${({ $secondary }) =>
    $secondary &&
    css`
      color: #fcff58;
      font-weight: 500;
      line-height: 1.4;
      letter-spacing: 4px;
      text-transform: uppercase;
      font-weight: 500;
      order: 2;
      margin-top: 20px;

      @media (max-width: 1024px) {
        margin-top: 5px;
      }
    `}
`;

const StyledTitle = styled.span`
  ${({ theme }) => useFontSize(theme, "l", "xl")}
  font-weight: 300;
  margin-top: 7px;

  ${({ $secondary }) =>
    $secondary &&
    css`
      ${({ theme }) => useFontSize(theme, "xxl", "xl")}
      color: #fff;
      font-weight: 400;
      order: 1;
      line-height: 1.2;
      margin-top: 0;

      span {
        color: ${({ theme }) => theme.primary};
        display: block;
      }
    `}

  @media (max-width: 1024px) {
    ${({ theme }) => useFontSize(theme, "xxl", "xl")}
  }
`;

const StyledBrandName = styled.span`
  ${({ theme }) => useFontSize(theme)}
  text-transform: uppercase;
  padding-left: 7px;
  margin-top: 7px;
`;

const StyledButtonWrapper = styled.div`
  ${({ $secondary }) =>
    $secondary &&
    css`
      order: 3;
    `}
`;

const StyledButton = styled(Button)`
  padding: 10px 15px;
  display: inline-flex;
  margin-top: 20px;
  border-radius: 7px;

  ${({ $secondary }) =>
    $secondary &&
    css`
      margin-top: 25px;
      padding: 13px 25px;
    `}

  @media (max-width: 1024px) {
    display: none;
  }
`;

const PromotionCard = ({ img, name, brandName, discount, link, secondary }) => {
  return (
    <StyledWrapper $secondary={secondary}>
      <StyledInnerWrapper $secondary={secondary}>
        <StyledDiscount $secondary={secondary}>
          Oszczędź nawet {discount}%
        </StyledDiscount>
        <StyledTitle $secondary={secondary}>
          {secondary && <span>{brandName}</span>}
          {name}
        </StyledTitle>
        {!secondary && <StyledBrandName>{brandName}</StyledBrandName>}
        <StyledButtonWrapper $secondary={secondary}>
          <StyledButton forwardedAs={Link} to={link} $secondary={secondary}>
            Kup teraz
          </StyledButton>
        </StyledButtonWrapper>
      </StyledInnerWrapper>
      <StyledBackground src={img} alt={name} $secondary={secondary} />
    </StyledWrapper>
  );
};

PromotionCard.propTypes = {
  img: PropTypes.any.isRequired,
  name: PropTypes.isRequired,
  brandName: PropTypes.string.isRequired,
  discount: PropTypes.number.isRequired,
  link: PropTypes.string.isRequired,
  secondary: PropTypes.bool,
};

PromotionCard.defaultProps = {
  secondary: false,
};

export default PromotionCard;
