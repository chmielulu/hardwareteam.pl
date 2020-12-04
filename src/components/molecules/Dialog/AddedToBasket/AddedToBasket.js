import React, { useState } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { ProductCard } from "@components/molecules";
import { Button, BackButton, ArrowButton } from "@components/atoms";
import { secondary, tertiary } from "@constants/kinds";
import formatPrice from "@utils/formatPrice";
import Icon from "@iconify/react";
import basketIcon from "@iconify/icons-clarity/shopping-cart-line";
import arrowIcon from "@iconify/icons-clarity/circle-arrow-line";
import { Link } from "react-router-dom";
import { useFontSize } from "@hooks/styled-components";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Window from "../_components/Window/Window";

SwiperCore.use([Navigation]);

const StyledWrapper = styled.div``;

const StyledProductWrapper = styled.div`
  padding: 30px 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid ${({ theme }) => theme.lightGray};
`;

const StyledProductInformations = styled.div`
  ${({ theme }) => useFontSize(theme)}
  display: flex;
`;

const StyledPrice = styled.div`
  margin-right: 15px;
`;

const StyledProductCount = styled.div`
  color: ${({ theme }) => theme.gray};
  font-weight: 300;
`;

const StyledTitle = styled.h2`
  ${({ theme }) => useFontSize(theme, "l")}
  margin: 20px 0 30px;
  padding-left: 30px;
  font-weight: 300;
`;

const StyledRecommendedProductsWrapper = styled.div`
  width: calc(100% - 60px);
  overflow: hidden;
  position: relative;
  margin: auto;
`;

const StyledSwiper = styled(Swiper)`
  .swiper-wrapper {
    display: inline-flex;
    flex-shrink: none;
  }
`;

const StyledSummary = styled.div`
  display: flex;
  ${({ theme }) => useFontSize(theme)}
  justify-content: space-between;
  padding: 0 30px;
  margin: 40px 0 20px;
  align-items: center;
`;

const StyledBasketCounterWrapper = styled.div`
  display: flex;
`;

const StyledBasketIconWrapper = styled.div`
  position: relative;
  @media (max-width: 1024px) {
    display: none;
  }
`;

const StyledBasketIcon = styled(Icon)`
  font-size: 3.2rem;
`;

const StyledBasketProductCount = styled.div`
  width: 22px;
  height: 22px;
  background: ${({ theme }) => theme.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  position: absolute;
  right: 0;
  top: 0;
  transform: translate(50%, -50%);
`;

const StyledSummaryText = styled.p`
  font-weight: 300;
  margin-left: 25px;
  width: 180px;
  margin-top: -7px;

  @media (max-width: 1024px) {
    margin-left: 0;
  }
`;

const StyledBasketPrice = styled.p`
  font-weight: 400;
  margin-top: 4px;
`;

const StyledBasketPriceText = styled.span`
  width: 100%;
  text-align: right;
  font-weight: 300;
`;

const StyledPaginationWrapper = styled.div`
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${({ theme }) => theme.lightGray};
`;

const StyledArrowButton = styled(ArrowButton)`
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  display: none;

  ${({ $isActive }) =>
    $isActive &&
    css`
      display: block;
    `}
`;

const StyledNextButton = styled(StyledArrowButton)`
  right: 5px;
`;

const StyledPrevButton = styled(StyledArrowButton)`
  left: 5px;
`;

const AddedToBasket = ({
  addedProduct,
  recommendedProducts,
  isActive,
  onClose,
}) => {
  const [position, setPosition] = useState(0);

  return (
    <Window
      title="Produkt został dodany do koszyka"
      isActive={isActive}
      onClose={onClose}
      width={600}
    >
      <StyledWrapper>
        <StyledProductWrapper>
          <ProductCard
            kind={tertiary}
            name={addedProduct.name}
            img={addedProduct.img}
            render={() => (
              <StyledProductInformations>
                <StyledPrice>{formatPrice(addedProduct.price)}</StyledPrice>
                <StyledProductCount>
                  {addedProduct.count} szt.
                </StyledProductCount>
              </StyledProductInformations>
            )}
          />
        </StyledProductWrapper>

        <StyledTitle>Rekomendowane Akcesoria</StyledTitle>
        <StyledRecommendedProductsWrapper>
          <StyledSwiper
            spaceBetween={10}
            slidesPerView="auto"
            freeMode="true"
            navigation={{
              nextEl: ".swiper-next-button",
              prevEl: ".swiper-prev-button",
            }}
            onReachEnd={() => setPosition(2)}
            onReachBeginning={() => setPosition(0)}
            onFromEdge={() => setPosition(1)}
          >
            {recommendedProducts.map(
              ({ name, price, discount, score, reviewsCount, img }, index) => (
                <SwiperSlide key={index}>
                  <ProductCard
                    name={name}
                    price={price}
                    discount={discount}
                    score={score}
                    reviewsCount={reviewsCount}
                    kind={secondary}
                    img={img}
                    size="small"
                  />
                </SwiperSlide>
              )
            )}
          </StyledSwiper>
          <StyledNextButton
            className="swiper-next-button"
            $isActive={position !== 2}
          />
          <StyledPrevButton
            rotate={-90}
            $isActive={position !== 0}
            className="swiper-prev-button"
          />
        </StyledRecommendedProductsWrapper>

        <StyledSummary>
          <StyledBasketCounterWrapper>
            <StyledBasketIconWrapper>
              <StyledBasketIcon icon={basketIcon} />
              <StyledBasketProductCount>1</StyledBasketProductCount>
            </StyledBasketIconWrapper>
            <StyledSummaryText>
              W koszyku łącznie masz 1 produkt
            </StyledSummaryText>
          </StyledBasketCounterWrapper>
          <StyledBasketPriceText>
            Wartość koszyka:
            <StyledBasketPrice>
              {formatPrice(addedProduct.price)}
            </StyledBasketPrice>
          </StyledBasketPriceText>
        </StyledSummary>

        <StyledPaginationWrapper>
          <BackButton
            onClick={(e) => {
              e.preventDefault();
              onClose();
            }}
            to="/"
          >
            Wróć do zakupów
          </BackButton>
          <Button
            as={Link}
            to="/"
            icon={arrowIcon}
            position="right"
            rotateIcon={90}
          >
            Przejdź do koszyka
          </Button>
        </StyledPaginationWrapper>
      </StyledWrapper>
    </Window>
  );
};

AddedToBasket.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  addedProduct: PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.any.isRequired,
    price: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
  }).isRequired,
  recommendedProducts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      discount: PropTypes.number,
      score: PropTypes.number.isRequired,
      reviewsCount: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default AddedToBasket;
