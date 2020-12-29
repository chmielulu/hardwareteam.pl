import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
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
import { useFontSize, useFluidSize } from "@hooks/styled-components";
import { useWindowSize } from "@hooks/utils";
import Icon from "@iconify/react";
import arrowIcon from "@iconify/icons-clarity/arrow-line";
import basketIcon from "@iconify/icons-clarity/shopping-cart-line";
import formatPrice from "@utils/formatPrice";
import { Img } from "react-image";
import { connect } from "react-redux";
import { addToBasket as addToBasketAction } from "@actions";
import scrollTo from "@utils/scrollToElement";
import SwiperCore, {
  Thumbs,
  Navigation as SwiperNavigation,
  Pagination,
  EffectFlip,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/components/effect-flip/effect-flip.scss";
import Navigation from "./_components/Navigation/Navigation";
import Description from "./_components/Description/Description";
import Specification from "./_components/Specification/Specification";
import Recommended from "./_components/Recommended/Recommended";
import Reviews from "./_components/Reviews/Reviews";
import blackImg from "./_dummyContent/images/black.png";
import greenImg from "./_dummyContent/images/green.png";
import currentImg from "./_dummyContent/images/1.png";
import { gallery } from "./_dummyContent/dummyContent";

SwiperCore.use([Thumbs, SwiperNavigation, Pagination, EffectFlip]);

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

  @media (max-width: 1420px) {
    margin-top: 0;
  }
`;

const StyledInnerWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: flex-start;

  @media (max-width: 1420px) {
    display: grid;
    align-items: unset;
    border-bottom: 1px solid ${({ theme }) => theme.lightGray};
    padding-bottom: 40px;
  }

  @media (max-width: 1024px) {
    /* display: flex;
    flex-direction: column;
    align-items: center; */
    width: 100%;
    padding-bottom: ${useFluidSize({ min: 20, max: 40 })};
  }

  @media (max-width: 360px) {
    padding-bottom: 20px;
  }
`;

const StyledFirstColumn = styled.div`
  width: 320px;

  @media (max-width: 1420px) {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 700px) {
    grid-column: 1 / 4;
    grid-row: 2 / 3;
  }
`;

const StyledAwardsWrapper = styled.div`
  @media (max-width: 1420px) {
    margin-top: 30px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  @media (max-width: 1024px) {
    display: inline-flex;
    width: calc(100% + 20px);
    flex-wrap: wrap;
    margin: 20px 0 10px -20px;
  }
`;

const StyledAward = styled(Award)`
  margin-bottom: 10px;

  :last-of-type {
    margin-bottom: 0;
  }

  @media (max-width: 1420px) {
    margin-bottom: 0;
    margin-right: 15px;
  }

  @media (max-width: 1024px) {
    margin: 8px 0 0 20px;
  }
`;

const StyledScoreWrapper = styled.div`
  margin-top: 20px;

  @media (max-width: 1024px) {
    order: 1;
  }
`;

const StyledScoreInnerWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledScore = styled(Score)`
  width: 115px;

  @media (max-width: 1024px) {
    width: ${useFluidSize({ min: 100, max: 115 })};
  }

  @media (max-width: 360px) {
    width: 100px;
  }
`;

const StyledScoreText = styled.span`
  ${({ theme }) => useFontSize(theme, "l")}
  font-weight: 500;
  margin-left: 10px;
`;

const StyledScoreLink = styled.a`
  ${({ theme }) => useFontSize(theme, "m", "l")}
  display: block;
  color: #f7b000;
  margin-top: 5px;
`;

const StyledAttributesWrapper = styled.div`
  margin-top: 20px;

  @media (max-width: 1024px) {
    margin-top: 0;
  }
`;

const StyledAttributesHeadline = styled.h3`
  ${({ theme }) => useFontSize(theme, "l", "xl")}
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
  margin-top: 10px;
  flex-wrap: wrap;
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
  margin-top: 5px;

  :nth-of-type(2) {
    border: 2px solid ${({ theme }) => theme.primary};
  }
`;

const StyledProductVariant = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const StyledAttributesLink = styled.a`
  ${({ theme }) => useFontSize(theme, "m", "l")}
  margin-top: 20px;
  color: ${({ theme }) => theme.primary};
  display: flex;
`;

const StyledSecondColumn = styled.div`
  margin: 40px 60px 0;
  flex: 1;

  @media (max-width: 1620px) {
    margin: 40px 40px 0;
  }

  @media (max-width: 1520px) {
    margin: 40px auto auto;
    display: flex;
    justify-content: center;
  }

  @media (max-width: 1420px) {
    grid-column: 1 / 4;
    grid-row: 1 / 2;
    margin: 40px 0;
    flex-direction: column;
    border-bottom: 1px solid ${({ theme }) => theme.lightGray};
    padding-bottom: 40px;
  }

  @media (max-width: 1024px) {
    order: -1;
    width: 100%;
    margin: ${useFluidSize({ min: 20, max: 40 })} 0;
    padding-bottom: 20px;
  }

  @media (max-width: 360px) {
    margin: 20px 0;
  }

  .swiper-pagination {
    display: none;
    justify-content: center;
    width: 75%;
    flex-wrap: wrap;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;

    @media (max-width: 1420px) {
      display: flex;
    }
  }

  .swiper-pagination-bullet {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${({ theme }) => theme.lightGray};
    margin-right: 10px;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    margin-top: 10px;
    display: block;

    :last-of-type {
      margin-right: 0;
    }

    &-active {
      background: ${({ theme }) => theme.primary};
      transform: scale(1.2);
      transform-origin: center center;
      cursor: default;
    }

    @media (max-width: 720px) {
      width: 15px;
      height: 15px;
    }
  }
`;

const StyledGalleryWrapper = styled.div`
  width: 460px;
  height: 460px;
  overflow: hidden;
  position: relative;

  .swiper-wrapper {
    display: flex;
  }

  @media (max-width: 1024px) {
    width: ${useFluidSize({ min: 220, max: 460 })};
    height: ${useFluidSize({ min: 220, max: 460 })};
  }
`;

const StyledActiveImage = styled.img`
  width: 460px;
  height: 460px;

  @media (max-width: 1024px) {
    width: ${useFluidSize({ min: 220, max: 460 })};
    height: ${useFluidSize({ min: 220, max: 460 })};
  }
`;

const StyledArrowButton = styled.button`
  border: 0;
  background: transparent;
  color: ${({ theme }) => theme.gray};
  cursor: pointer;
  outline: none;

  :first-of-type {
    margin-right: auto;
  }

  :last-of-type {
    margin-left: auto;
  }
`;

const StyledActiveImageWrapper = styled.div`
  display: flex;
  align-items: center;

  ${StyledArrowButton} {
    @media (max-width: 1520px) {
      display: none;
    }

    @media (max-width: 1420px) {
      display: block;
    }
  }

  @media (max-width: 1420px) {
    width: 100%;
    padding: 0 20px;
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

  @media (max-width: 1024px) {
    font-size: ${useFluidSize({ min: 3, max: 4, unit: "rem" })};
  }

  @media (max-width: 360px) {
    font-size: 3rem;
  }
`;

const StyledThirdColumn = styled.div`
  border: 1px solid ${({ theme }) => theme.lightGray};
  padding: 35px 35px 50px;
  border-radius: 10px;

  @media (max-width: 1420px) {
    grid-column: 3 / 4;
    grid-row: 2 / 3;
  }

  @media (max-width: 1024px) {
    border: 0;
    padding: 0;
  }

  @media (max-width: 700px) {
    grid-column: 1 / 4;
    grid-row: 3 / 4;
    margin-top: ${useFluidSize({ min: 20, max: 30, maxView: 700 })};
  }

  @media (max-width: 360px) {
    margin-top: 20px;
  }
`;

const StyledPrice = styled.div`
  ${({ theme }) => useFontSize(theme, "xl", "xxl")}
  font-weight: 500;
  margin-bottom: 20px;
`;

const StyledProductActionWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;

  @media (max-width: 1024px) {
    margin-bottom: 20px;
  }
`;

const StyledInput = styled(Input)`
  margin-right: 20px;
  width: 55px;

  input {
    text-align: center;
    ${({ theme }) => useFontSize(theme, "m", "l")}
  }
`;

const StyledButton = styled(Button)`
  @media (max-width: 700px) {
    flex: 1;
    overflow: hidden;
  }
`;

const StyledInformation = styled(Information)`
  padding-bottom: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.lightGray};
  margin-bottom: 10px;
  padding-left: 5px;
  width: 240px;

  :last-of-type {
    margin-bottom: 0;
  }

  @media (max-width: 1024px) {
    width: 230px;
    :last-of-type {
      border: 0;
    }
  }

  @media (max-width: 700px) {
    width: 100%;
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

  @media (max-width: 1024px) {
    display: none;
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

  @media (max-width: 1420px) {
    display: none;
  }
`;

const StyledThumbsWrapper = styled.div`
  flex: 1;
  overflow: hidden;
  padding: 0 50px;

  .swiper-wrapper {
    display: flex;
    width: 100%;
    justify-content: center;
  }

  .swiper-slide {
    width: 85px;
    height: 85px;
    opacity: 0.4;
    cursor: pointer;
    transition: opacity 0.2s ease-in-out;
  }

  .swiper-slide-thumb-active {
    opacity: 1;
  }
`;

const StyledImage = styled(Img)`
  width: 85px;
  height: 85px;
`;

const Product = ({ addToBasket }) => {
  const count = 6;
  const { width } = useWindowSize();
  const [activeImage, setActiveImage] = useState(0);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const handleNextClick = () => {
    if (activeImage + 1 > count - 1) {
      setActiveImage(0);
    } else {
      setActiveImage(activeImage + 1);
    }
  };

  const handlePrevClick = () => {
    if (activeImage - 1 < 0) {
      setActiveImage(count - 1);
    } else {
      setActiveImage(activeImage - 1);
    }
  };

  const description = useRef();
  const specification = useRef();
  const accessories = useRef();
  const reviews = useRef();

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
        {width <= 1420 && (
          <StyledAwardsWrapper>
            <StyledAward kind="valueForMoney" />
            <StyledAward kind="bestseller" />
            <StyledAward kind="recommendable" />
          </StyledAwardsWrapper>
        )}

        <StyledHeadline>
          Smartfon Huawei Y6P 64GB Dual SIM Fioletowy
        </StyledHeadline>
        <StyledInnerWrapper>
          <StyledFirstColumn>
            {width > 1420 && (
              <StyledAwardsWrapper>
                <StyledAward kind="valueForMoney" />
                <StyledAward kind="bestseller" />
                <StyledAward kind="recommendable" />
              </StyledAwardsWrapper>
            )}
            <StyledScoreWrapper>
              <StyledScoreInnerWrapper>
                <StyledScore score={5} />
                <StyledScoreText>5/5</StyledScoreText>
              </StyledScoreInnerWrapper>
              <StyledScoreLink
                href="#"
                onClick={(e) => {
                  scrollTo(reviews, e, { yOffset: 280 });
                }}
              >
                Zobacz 2 opinie
              </StyledScoreLink>
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
            <StyledAttributesLink
              href="#"
              onClick={(e) => {
                scrollTo(specification, e, { yOffset: 280 });
              }}
            >
              Zobacz wszystkie parametry
            </StyledAttributesLink>
          </StyledFirstColumn>
          <StyledSecondColumn>
            <StyledActiveImageWrapper>
              <StyledArrowButton
                onClick={handlePrevClick}
                className="swiper-prev-button"
              >
                <StyledArrowIcon icon={arrowIcon} />
              </StyledArrowButton>
              <StyledGalleryWrapper>
                <Swiper
                  thumbs={{ swiper: thumbsSwiper }}
                  navigation={{
                    nextEl: `.swiper-next-button`,
                    prevEl: `.swiper-prev-button`,
                  }}
                  loop
                  effect="flip"
                  pagination={{
                    el: ".swiper-pagination",
                    clickable: true,
                  }}
                  updateOnWindowResize
                >
                  {gallery.map((img) => (
                    <SwiperSlide>
                      <StyledActiveImage
                        src={img}
                        alt="Smartfon Huawei Y6P 64GB Dual SIM Fioletowy"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </StyledGalleryWrapper>
              <StyledArrowButton
                onClick={handleNextClick}
                className="swiper-next-button"
              >
                <StyledArrowIcon icon={arrowIcon} />
              </StyledArrowButton>
            </StyledActiveImageWrapper>
            <div className="swiper-pagination" />
          </StyledSecondColumn>
          <StyledThirdColumn>
            <StyledPrice>559,00 zł</StyledPrice>
            <StyledProductActionWrapper>
              <StyledInput name="count" value={1} label="count" />
              <StyledButton
                icon={basketIcon}
                onClick={() =>
                  addToBasket({
                    name: "Smartfon Huawei Y6P 64GB Dual SIM Fioletowy",
                    img: currentImg,
                    price: 559,
                  })
                }
              >
                Do koszyka
              </StyledButton>
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
          <StyledThumbsWrapper>
            <Swiper
              onSwiper={setThumbsSwiper}
              watchSlidesVisibility
              watchSlidesProgress
              slidesPerView="auto"
              freeMode
              updateOnWindowResize
            >
              {gallery.map((img) => (
                <SwiperSlide>
                  <StyledImage src={img} alt="" loader={<Spinner />} />
                </SwiperSlide>
              ))}
            </Swiper>
          </StyledThumbsWrapper>
        </StyledImagesWrapper>

        <Navigation
          allSections={{ description, specification, accessories, reviews }}
        />
        <Description ref={description} />
        <Specification ref={specification} />
        <Recommended ref={accessories} />
        <Reviews ref={reviews} />
      </StyledWrapper>
    </MainTemplate>
  );
};

Product.propTypes = {
  addToBasket: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addToBasket: (product) => dispatch(addToBasketAction(product)),
});

export default connect(null, mapDispatchToProps)(Product);
