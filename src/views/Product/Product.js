import React from "react";
import styled from "styled-components";
import MainTemplate from "@templates/MainTemplate";
import {
  Locator,
  Award,
  Score,
  Attribute,
  Input,
  Button,
  Information,
  Spinner,
} from "@components/atoms";
import { useFontSize } from "@hooks/styled-components";
import Icon from "@iconify/react";
import arrowIcon from "@iconify/icons-clarity/arrow-line";
import basketIcon from "@iconify/icons-clarity/shopping-cart-line";
import formatPrice from "@utils/formatPrice";
import { Img } from "react-image";
import Navigation from "./_components/Navigation/Navigation";
import Description from "./_components/Description/Description";
import Specification from "./_components/Specification/Specification";
import Recommended from "./_components/Recommended/Recommended";
import Reviews from "./_components/Reviews/Reviews";
import blackImg from "./_dummyContent/images/black.png";
import greenImg from "./_dummyContent/images/green.png";
import currentImg from "./_dummyContent/images/1.png";
import img2 from "./_dummyContent/images/2.png";
import img3 from "./_dummyContent/images/3.png";
import img4 from "./_dummyContent/images/4.png";
import img5 from "./_dummyContent/images/5.png";
import img6 from "./_dummyContent/images/6.png";
import img7 from "./_dummyContent/images/7.png";
import img8 from "./_dummyContent/images/8.png";
import img9 from "./_dummyContent/images/9.png";

const StyledWrapper = styled.div`
  width: 90%;
  max-width: 1500px;
  margin: auto;
  margin-top: 20px;
`;

const StyledHeadline = styled.h2`
  ${({ theme }) => useFontSize(theme, "xl")}
  margin-top: 40px;
  font-weight: 400;
`;

const StyledInnerWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: flex-start;
`;

const StyledFirstColumn = styled.div`
  width: 400px;
`;

const StyledAward = styled(Award)`
  margin-bottom: 10px;

  :last-of-type {
    margin-bottom: 0;
  }
`;

const StyledScoreWrapper = styled.div`
  margin-top: 20px;
`;

const StyledScoreInnerWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledScore = styled(Score)`
  width: 115px;
`;

const StyledScoreText = styled.span`
  ${({ theme }) => useFontSize(theme, "l")}
  font-weight: 500;
  margin-left: 10px;
`;

const StyledScoreLink = styled.a`
  ${({ theme }) => useFontSize(theme)}
  display: block;
  color: #f7b000;
  margin-top: 5px;
`;

const StyledAttributesWrapper = styled.div`
  margin-top: 20px;
`;

const StyledAttributesHeadline = styled.h3`
  ${({ theme }) => useFontSize(theme, "l")}
  font-weight: 400;
  margin-bottom: 10px;
`;

const StyledAttribute = styled(Attribute)`
  margin-bottom: 10px;

  :last-of-type {
    margin-bottom: 0;
  }
`;

const StyledProductVariants = styled.div`
  display: flex;
  margin-top: 15px;
`;

const StyledProductVariantWrapper = styled.div`
  width: 70px;
  height: 45px;
  border: 1px solid ${({ theme }) => theme.gray};
  border-radius: 10px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;

  :nth-of-type(2) {
    border: 2px solid ${({ theme }) => theme.primary};
  }
`;

const StyledProductVariant = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const StyledAttributesLink = styled.a`
  ${({ theme }) => useFontSize(theme)}
  margin-top: 20px;
  color: ${({ theme }) => theme.primary};
  display: flex;
`;

const StyledSecondColumn = styled.div`
  margin: auto auto 0;
`;

const StyledActiveImageWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledActiveImage = styled.img`
  max-width: 480px;
  max-height: 460px;
`;

const StyledArrowButton = styled.button`
  border: 0;
  background: transparent;
  color: ${({ theme }) => theme.gray};
  cursor: pointer;
  outline: none;

  :first-of-type {
    margin-right: 80px;
  }

  :last-of-type {
    margin-left: 80px;
  }
`;

const StyledArrowIcon = styled(Icon)`
  font-size: 4rem;

  ${StyledArrowButton}:first-of-type & {
    transform: rotate(-90deg) !important;
  }

  ${StyledArrowButton}:last-of-type & {
    transform: rotate(90deg) !important;
  }
`;

const StyledThirdColumn = styled.div`
  border: 1px solid ${({ theme }) => theme.lightGray};
  margin-left: auto;
  padding: 35px 35px 50px;
  border-radius: 10px;
`;

const StyledPrice = styled.div`
  ${({ theme }) => useFontSize(theme, "xl")}
  font-weight: 500;
  margin-bottom: 20px;
`;

const StyledProductActionWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;

const StyledInput = styled(Input)`
  margin-right: 20px;
  width: 55px;

  input {
    text-align: center;
  }
`;

const StyledButton = styled(Button)``;

const StyledInformation = styled(Information)`
  padding-bottom: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.lightGray};
  margin-bottom: 10px;
  padding-left: 5px;
  width: 240px;

  :last-of-type {
    margin-bottom: 0;
  }
`;

const StyledCode = styled.span`
  ${({ theme }) => useFontSize(theme, "s")}
  display: block;
  color: ${({ theme }) => theme.gray};

  :first-of-type {
    margin-top: 30px;
    margin-bottom: 7px;
  }
`;

const StyledImagesWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border-top: 1px solid ${({ theme }) => theme.lightGray};
  border-bottom: 1px solid ${({ theme }) => theme.lightGray};
  margin-top: 60px;
  padding: 50px 40px;

  ${StyledArrowButton} {
    :first-of-type {
      margin-right: auto;
    }

    :last-of-type {
      margin-left: auto;
    }
  }
`;

const StyledImage = styled(Img)`
  max-width: 100px;
  max-height: 85px;
`;

const Product = () => {
  return (
    <MainTemplate>
      <StyledWrapper>
        <Locator
          locations={[
            {
              name: "Telefony i smartwatche",
              link: `/kategoria/telefony-i-smartwatche`,
            },
            {
              name: "Smartfony i telefony",
              link: `/kategoria/telefony-i-smartwatche/smartfony-i-telefony`,
            },
            {
              name: "Smartfon Huawei Y6P 64GB Dual SIM Fioletowy",
              link: "/produkt/huawei-y6p-64gb-fioletowy",
            },
          ]}
        />
        <StyledHeadline>
          Smartfon Huawei Y6P 64GB Dual SIM Fioletowy
        </StyledHeadline>
        <StyledInnerWrapper>
          <StyledFirstColumn>
            <StyledAward kind="valueForMoney" />
            <StyledAward kind="bestseller" />
            <StyledAward kind="recommendable" />
            <StyledScoreWrapper>
              <StyledScoreInnerWrapper>
                <StyledScore score={5} />
                <StyledScoreText>5/5</StyledScoreText>
              </StyledScoreInnerWrapper>
              <StyledScoreLink href="#">Zobacz 2 opinie</StyledScoreLink>
            </StyledScoreWrapper>
            <StyledAttributesWrapper>
              <StyledAttributesHeadline>
                Najważniejsze parametry
              </StyledAttributesHeadline>
              <StyledAttribute name="Ekran" value={`6,3"`} />
              <StyledAttribute
                name="Procesor"
                value="MediaTek MT6762R Helio P22"
              />
              <StyledAttribute name="Pamięć RAM" value="3 GB" />
              <StyledAttribute name="Pamięć wbudowana" value="64 GB" />
              <StyledAttribute name="System" value="Android 10" />
              <StyledAttribute name="Kolor" value="Fioletowy" />
            </StyledAttributesWrapper>
            <StyledProductVariants>
              <StyledProductVariantWrapper>
                <StyledProductVariant src={blackImg} alt="Czarny" />
              </StyledProductVariantWrapper>
              <StyledProductVariantWrapper>
                <StyledProductVariant src={currentImg} alt="Fioletowy" />
              </StyledProductVariantWrapper>
              <StyledProductVariantWrapper>
                <StyledProductVariant src={greenImg} alt="Zielony" />
              </StyledProductVariantWrapper>
            </StyledProductVariants>
            <StyledAttributesLink href="#">
              Zobacz wszystkie parametry
            </StyledAttributesLink>
          </StyledFirstColumn>
          <StyledSecondColumn>
            <StyledActiveImageWrapper>
              <StyledArrowButton>
                <StyledArrowIcon icon={arrowIcon} />
              </StyledArrowButton>
              <StyledActiveImage
                src={currentImg}
                alt="Smartfon Huawei Y6P 64GB Dual SIM Fioletowy"
              />
              <StyledArrowButton>
                <StyledArrowIcon icon={arrowIcon} />
              </StyledArrowButton>
            </StyledActiveImageWrapper>
          </StyledSecondColumn>
          <StyledThirdColumn>
            <StyledPrice>559,00 zł</StyledPrice>
            <StyledProductActionWrapper>
              <StyledInput name="count" value={1} label="count" />
              <StyledButton icon={basketIcon}>Do koszyka</StyledButton>
            </StyledProductActionWrapper>
            <StyledInformation kind="time" to="/" />
            <StyledInformation kind="delivery" to="/" />
            <StyledInformation
              kind="instalments"
              to="/"
              value={formatPrice(18.47)}
            />
            <StyledCode>Kod producenta: Merida-L49C Phantom Purple</StyledCode>
            <StyledCode>Kod Hardware Team: 563587 </StyledCode>
          </StyledThirdColumn>
        </StyledInnerWrapper>
        <StyledImagesWrapper>
          <StyledArrowButton>
            <StyledArrowIcon icon={arrowIcon} />
          </StyledArrowButton>
          <StyledImage src={currentImg} alt="" />
          <StyledImage src={img2} alt="" render={<Spinner />} />
          <StyledImage src={img3} alt="" render={<Spinner />} />
          <StyledImage src={img4} alt="" render={<Spinner />} />
          <StyledImage src={img5} alt="" render={<Spinner />} />
          <StyledImage src={img6} alt="" render={<Spinner />} />
          <StyledImage src={img7} alt="" render={<Spinner />} />
          <StyledImage src={img8} alt="" render={<Spinner />} />
          <StyledImage src={img9} alt="" render={<Spinner />} />
          <StyledArrowButton>
            <StyledArrowIcon icon={arrowIcon} />
          </StyledArrowButton>
        </StyledImagesWrapper>

        <Navigation />
        <Description />
        <Specification />
        <Recommended />
        <Reviews />
      </StyledWrapper>
    </MainTemplate>
  );
};

export default Product;
