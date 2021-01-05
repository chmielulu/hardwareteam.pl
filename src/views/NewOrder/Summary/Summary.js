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
import { useFontSize, useFluidSize } from "@hooks/styled-components";
import blikImg from "../dummyContent/images/blik.png";
import Product from "../Product/Product";

const StyledWrapper = styled.div`
  @media (max-width: 1024px) {
    margin-top: ${useFluidSize({ min: 25, max: 45 })};
  }

  @media (max-width: 360px) {
    margin-top: 25px;
  }
`;

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

  @media (max-width: 1024px) {
    max-width: ${useFluidSize({ min: 25, max: 42 })};
    max-height: ${useFluidSize({ min: 25, max: 42 })};
  }

  @media (max-width: 360px) {
    max-width: 25px;
    max-height: 25px;
  }
`;

const StyledText = styled.p`
  ${({ theme }) => useFontSize(theme, "m", "l")}
  font-weight: 300;
  margin-bottom: 6px;
  flex: 1;

  :last-of-type {
    margin-bottom: 0;
  }
`;

const StyledFrameHeadline = styled.h4`
  ${({ theme }) => useFontSize(theme, "m", "l")}
  font-weight: 400;
  margin-bottom: 10px;
`;

const StyledFrame = styled(Frame)`
  position: relative;
  width: 515px;
  margin-bottom: 8px;
  padding-right: 53px;

  ${({ $basket }) =>
    $basket &&
    css`
      width: 600px;
      padding-right: 15px;
    `}

  ${({ $staticHeight }) =>
    $staticHeight &&
    css`
      height: 55px;
      padding-top: 0;
      padding-bottom: 0;
      display: flex;
      align-items: center;

      @media (max-width: 1024px) {
        height: unset;
        min-height: 55px;
      }
    `}

  @media (max-width: 1280px) {
    width: 500px;
  }

  @media (max-width: 720px) {
    width: 100%;
    word-wrap: break-word;
  }

  @media (max-width: 1024px) {
    padding-left: ${useFluidSize({ min: 15, max: 25 })};
    padding-top: ${useFluidSize({ min: 15, max: 25 })};
    padding-bottom: ${useFluidSize({ min: 15, max: 25 })};
  }

  @media (max-width: 360px) {
    padding-left: 15px;
    padding-top: 15px;
    padding-bottom: 15px;
  }
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

const Summary = ({ Headline, SecondHeadline, Section, basket }) => {
  return (
    <StyledWrapper>
      <Headline>Podsumowanie</Headline>

      <Section>
        <SecondHeadline>Dostawa</SecondHeadline>
        <StyledFrame $staticHeight>
          <StyledInnerWrapper>
            <StyledIcon icon={truckIcon} />
            <StyledText>Kurier – InPost, UPS, DHL, FedEx lub DTS </StyledText>
            <StyledCircleButton />
          </StyledInnerWrapper>
        </StyledFrame>

        <StyledFrame>
          <StyledFrameHeadline>Dane odbiorcy: </StyledFrameHeadline>
          <StyledText>Jakub Chmielewski</StyledText>
          <StyledText>ul. Rzepińska 5A/3</StyledText>
          <StyledText>69-110 Kowalów</StyledText>
          <StyledText>E-mail: jakubchmielewski80@gmail.com</StyledText>
          <StyledText>Telefon: +48 887 077 904</StyledText>
          <StyledCircleButton />
        </StyledFrame>
      </Section>

      <Section>
        <SecondHeadline>Płatność</SecondHeadline>
        <StyledFrame $staticHeight>
          <StyledInnerWrapper>
            <StyledImg src={blikImg} alt="BLIK" />
            <StyledText>BLIK</StyledText>
            <StyledCircleButton />
          </StyledInnerWrapper>
        </StyledFrame>
      </Section>

      <Section>
        <SecondHeadline>Koszyk</SecondHeadline>
        <StyledFrame $basket>
          {basket.products.map(({ name, ...props }) => (
            <StyledProduct name={name} key={name} {...props} />
          ))}
        </StyledFrame>
      </Section>

      <Section>
        <SecondHeadline>Komentarz do zamówienia</SecondHeadline>
        <StyledFrame $staticHeight>
          <StyledInnerWrapper>
            <StyledText>Brak uwag</StyledText>
            <StyledCircleButton />
          </StyledInnerWrapper>
        </StyledFrame>
      </Section>
    </StyledWrapper>
  );
};

Summary.propTypes = {
  Headline: PropTypes.object.isRequired,
  SecondHeadline: PropTypes.object.isRequired,
  basket: PropTypes.object.isRequired,
  Section: PropTypes.object.isRequired,
};

export default Summary;
