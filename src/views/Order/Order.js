import React from "react";
import styled from "styled-components";
import UserTemplate from "@templates/UserTemplate";
import { BackButton } from "@components/atoms";
import { OrderProcess } from "@components/molecules";
import { useParams } from "react-router-dom";
import { useFontSize, useFluidSize } from "@hooks/styled-components";
import Icon from "@iconify/react";
import shipmentIcon from "@iconify/icons-clarity/truck-line";
import blikImg from "@assets/images/blik.png";
import formatPrice from "@utils/formatPrice";
import SpecificProductCard from "./_components/SpecificProductCard/SpecificProductCard";
import productImg from "./_dummyContent/images/product.png";

const StyledOrderProcess = styled(OrderProcess)`
  margin-top: 45px;
  margin-bottom: 70px;

  @media (max-width: 1024px) {
    margin-bottom: ${useFluidSize({ min: 30, max: 70 })};
    margin-top: ${useFluidSize({ min: 30, max: 45 })};
  }

  @media (max-width: 360px) {
    margin: 30px 0;
  }
`;

const StyledHeadline = styled.h2`
  ${({ theme }) => useFontSize(theme, "l", "xl")}
  font-weight: 400;

  b {
    font-weight: 500;
  }
`;

const StyledParagraph = styled.p`
  ${({ theme }) => useFontSize(theme, "m", "l")}
  font-weight: 300;
  margin-top: 8px;
`;

const StyledSection = styled.div`
  margin-top: 50px;
  width: 100%;
  max-width: 800px;

  @media (max-width: 1024px) {
    margin-top: ${useFluidSize({ min: 30, max: 50 })};
  }

  @media (max-width: 360px) {
    margin-top: 30px;
  }
`;

const StyledSectionHeadline = styled.h3`
  ${({ theme }) => useFontSize(theme, "l", "xl")}
  font-weight: 400;
  margin-bottom: 25px;

  @media (max-width: 1024px) {
    margin-bottom: ${useFluidSize({ min: 20, max: 25 })};
  }

  @media (max-width: 360px) {
    margin-bottom: 20px;
  }
`;

const StyledItem = styled.div`
  padding: 20px 25px;
  border: 1px solid ${({ theme }) => theme.lightGray};
  border-radius: 10px;
  margin-bottom: 20px;

  :last-of-type {
    margin-bottom: 0;
  }
`;

const StyledRowWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledItemText = styled.span`
  ${({ theme }) => useFontSize(theme, "m", "l")}
  font-weight: 300;
  display: block;
  margin-bottom: 8px;

  :last-of-type {
    margin-bottom: 0;
  }
`;

const StyledShipmentIcon = styled(Icon)`
  font-size: 2.4rem;
  margin-right: 15px;
`;

const StyledLink = styled.a`
  ${({ theme }) => useFontSize(theme)}
  margin-left: auto;
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  font-weight: 300;

  :hover {
    text-decoration: underline;
  }

  @media (max-width: 720px) {
    display: none;
  }
`;

const StyledItemsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  ${StyledItem} {
    width: 49%;
    margin-bottom: 0;
  }

  @media (max-width: 720px) {
    flex-direction: column;
    margin-top: 0;

    ${StyledItem} {
      width: 100%;
      margin-bottom: 20px;
    }
  }
`;

const StyledItemHeader = styled.span`
  ${({ theme }) => useFontSize(theme)}
  font-weight: 400;
  margin-bottom: 12px;
  display: flex;
`;

const StyledImg = styled.img`
  max-width: 32px;
  max-height: 32px;
  margin-right: 15px;
`;

const StyledProductsWrapper = styled.div`
  margin-top: 40px;
  border-top: 1px solid ${({ theme }) => theme.lightGray};
  border-bottom: 1px solid ${({ theme }) => theme.lightGray};
  padding-top: 20px;

  @media (max-width: 1024px) {
    padding-top: ${useFluidSize({ min: 15, max: 20 })};
    margin-top: ${useFluidSize({ min: 20, max: 40 })};
  }

  @media (max-width: 360px) {
    padding-top: 15px;
    margin-top: 20px;
  }
`;

const StyledSummary = styled.div`
  width: 315px;
  margin-left: auto;
  margin-top: 30px;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const StyledSummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  ${({ theme }) => useFontSize(theme, "m", "l")}
  font-weight: 300;
  margin-bottom: 10px;
  padding: 0 15px;

  :last-of-type {
    font-weight: 500;
    margin-bottom: 0;
    margin-top: 20px;
    border-top: 1px solid ${({ theme }) => theme.lightGray};
    padding-top: 10px;
  }
`;

const StyledSummaryText = styled.p``;

const StyledSummaryPrice = styled.span``;

const Order = () => {
  const { orderId } = useParams();

  return (
    <UserTemplate withoutBackButton>
      <BackButton to="/uzytkownik/zamowienia">
        Pokaż wszystkie zamówienia
      </BackButton>
      <StyledOrderProcess
        content={[
          { name: "Nowe", isFinished: true },
          { name: "W realizacji", isFinished: true },
          { name: "Wysłane", isFinished: true },
          {
            name: "Zakończone",
            description: "Świetnie! Twoje zamówienie już do ciebie dotarło",
            isFinished: true,
            isActive: true,
          },
        ]}
      />

      <StyledHeadline>
        Zamówienie nr <b>{orderId}</b>
      </StyledHeadline>
      <StyledParagraph>z 29 października</StyledParagraph>

      <StyledSection>
        <StyledSectionHeadline>Dostawa</StyledSectionHeadline>
        <StyledItem>
          <StyledRowWrapper>
            <StyledShipmentIcon icon={shipmentIcon} />
            <StyledItemText>
              Kurier – InPost, UPS, DHL, FedEx lub DTS
            </StyledItemText>
            <StyledLink
              href="http://google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Śledź przesyłkę
            </StyledLink>
          </StyledRowWrapper>
        </StyledItem>
        <StyledItemsWrapper>
          <StyledItem>
            <StyledItemHeader>Dane odbiorcy:</StyledItemHeader>
            <StyledItemText>Jakub Chmielewski</StyledItemText>
            <StyledItemText>
              E-mail: jakubchmielewski80@gmail.com
            </StyledItemText>
            <StyledItemText>Telefon: +48 887 077 904</StyledItemText>
          </StyledItem>

          <StyledItem>
            <StyledItemHeader>Adres dostawy:</StyledItemHeader>
            <StyledItemText>ul. Rzepińska 5A/3</StyledItemText>
            <StyledItemText>69-110 Kowalów</StyledItemText>
          </StyledItem>
        </StyledItemsWrapper>
      </StyledSection>

      <StyledSection>
        <StyledSectionHeadline>Płatność</StyledSectionHeadline>
        <StyledItem>
          <StyledRowWrapper>
            <StyledImg src={blikImg} alt="BLIK" />
            <StyledItemText>BLIK</StyledItemText>
          </StyledRowWrapper>
        </StyledItem>

        <StyledItem>
          <StyledItemHeader>
            Dane do faktury:
            <StyledLink
              href="http://google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pobierz fakturę VAT
            </StyledLink>
          </StyledItemHeader>
          <StyledItemText>Jakub Chmielewski</StyledItemText>
          <StyledItemText>ul. Rzepińska 5A/3</StyledItemText>
          <StyledItemText>69-110 Kowalów</StyledItemText>
        </StyledItem>
      </StyledSection>

      <StyledSection>
        <StyledSectionHeadline>Komentarz do zamówienia</StyledSectionHeadline>
        <StyledItem>
          <StyledItemText>Brak uwag</StyledItemText>
        </StyledItem>
      </StyledSection>

      <StyledSection>
        <StyledSectionHeadline>Zamówienie</StyledSectionHeadline>

        <StyledProductsWrapper>
          <SpecificProductCard
            name="PC Cyberpunk 2077"
            price={154}
            count={1}
            img={productImg}
          />
        </StyledProductsWrapper>

        <StyledSummary>
          <StyledSummaryRow>
            <StyledSummaryText>Wartość koszyka: </StyledSummaryText>
            <StyledSummaryPrice>{formatPrice(154)}</StyledSummaryPrice>
          </StyledSummaryRow>
          <StyledSummaryRow>
            <StyledSummaryText>Kosz dostawy: </StyledSummaryText>
            <StyledSummaryPrice>{formatPrice(0)}</StyledSummaryPrice>
          </StyledSummaryRow>
          <StyledSummaryRow>
            <StyledSummaryText>Łączna suma: </StyledSummaryText>
            <StyledSummaryPrice>{formatPrice(154)}</StyledSummaryPrice>
          </StyledSummaryRow>
        </StyledSummary>
      </StyledSection>
    </UserTemplate>
  );
};

export default Order;
