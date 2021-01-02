import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { Frame, CircleButton } from "@components/atoms";
import { Img } from "react-image";
import truckIcon from "@iconify-icons/clarity/truck-line";
import { Link } from "react-router-dom";
import routes from "@routes";
import Icon from "@iconify/react";
import pencilIcon from "@iconify/icons-clarity/pencil-line";
import { useFontSize } from "@hooks/styled-components";
import blikImg from "../dummyContent/images/blik.png";
import Product from "../Product/Product";

const StyledWrapper = styled.div``;

const StyledInnerWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledIcon = styled(Icon)`
  font-size: 2.5rem;
  margin-right: 15px;
`;

const StyledImg = styled(Img)`
  margin-right: 15px;
  max-width: 42px;
  max-height: 42px;
`;

const StyledText = styled.p`
  ${({ theme }) => useFontSize(theme)}
  font-weight: 300;
  margin-bottom: 6px;

  :last-of-type {
    margin-bottom: 0;
  }
`;

const StyledFrameHeadline = styled.h4`
  ${({ theme }) => useFontSize(theme)}
  font-weight: 400;
  margin-bottom: 10px;
`;

const StyledFrame = styled(Frame)`
  position: relative;
  width: 515px;
  margin-bottom: 8px;

  ${({ $basket }) =>
    $basket &&
    css`
      width: 600px;
    `}

  ${({ $staticHeight }) =>
    $staticHeight &&
    css`
      height: 55px;
      padding-top: 0;
      padding-bottom: 0;
      display: flex;
      align-items: center;
    `}

  ${({ $last }) =>
    $last &&
    css`
      margin-bottom: 55px;
    `}
`;

const StyledCircleButton = styled(CircleButton).attrs(({ to }) => ({
  forwardedAs: Link,
  to: to || routes.newOrder,
  icon: pencilIcon,
  label: "Edytuj",
}))`
  position: absolute;
  right: 7px;
  top: 9px;
`;

const StyledProduct = styled(Product)`
  margin-bottom: 20px;

  :last-of-type {
    margin-bottom: 0;
  }
`;

const Summary = ({ Headline, SecondHeadline, basket }) => {
  return (
    <StyledWrapper>
      <Headline>Podsumowanie</Headline>

      <SecondHeadline>Dostawa</SecondHeadline>
      <StyledFrame $staticHeight>
        <StyledInnerWrapper>
          <StyledIcon icon={truckIcon} />
          <StyledText>Kurier – InPost, UPS, DHL, FedEx lub DTS </StyledText>
          <StyledCircleButton />
        </StyledInnerWrapper>
      </StyledFrame>

      <StyledFrame $last>
        <StyledFrameHeadline>Dane odbiorcy: </StyledFrameHeadline>
        <StyledText>Jakub Chmielewski</StyledText>
        <StyledText>ul. Rzepińska 5A/3</StyledText>
        <StyledText>69-110 Kowalów</StyledText>
        <StyledText>E-mail: jakubchmielewski80@gmail.com</StyledText>
        <StyledText>Telefon: +48 887 077 904</StyledText>
        <StyledCircleButton />
      </StyledFrame>

      <SecondHeadline>Płatność</SecondHeadline>
      <StyledFrame $staticHeight $last>
        <StyledInnerWrapper>
          <StyledImg src={blikImg} alt="BLIK" />
          <StyledText>BLIK</StyledText>
          <StyledCircleButton />
        </StyledInnerWrapper>
      </StyledFrame>

      <SecondHeadline>Koszyk</SecondHeadline>
      <StyledFrame $basket $last>
        {basket.products.map(({ name, ...props }) => (
          <StyledProduct name={name} key={name} {...props} />
        ))}
        <StyledCircleButton to={routes.basket} />
      </StyledFrame>

      <SecondHeadline>Komentarz do zamówienia</SecondHeadline>
      <StyledFrame $staticHeight>
        <StyledInnerWrapper>
          <StyledText>Brak uwag</StyledText>
          <StyledCircleButton />
        </StyledInnerWrapper>
      </StyledFrame>
    </StyledWrapper>
  );
};

Summary.propTypes = {
  Headline: PropTypes.object.isRequired,
  SecondHeadline: PropTypes.object.isRequired,
  basket: PropTypes.object.isRequired,
};

export default Summary;
