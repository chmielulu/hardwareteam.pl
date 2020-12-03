import React, { useEffect, useRef, useState } from "react";
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
import gsap from "gsap";
import Window from "../_components/Window/Window";

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

const StyledRecommendedProductsView = styled.div`
  display: inline-flex;
  flex-shrink: none;
  transition: trasform 0.2s ease-in-out;
`;

const StyledRecommendedProductContainer = styled.div`
  margin-right: 10px;

  :last-of-type {
    margin-right: 0;
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
  const [transformMultipliersState, setTransformMultipliersState] = useState();
  const [transformWidthState, setTransformWidthState] = useState(0);
  const [activeView, setActiveView] = useState(0);

  const productsWrapper = useRef();
  const productsView = useRef();

  const handleNextView = () => {
    if (activeView === transformMultipliersState.length - 1) {
      setActiveView(0);
    } else {
      setActiveView(activeView + 1);
    }
  };

  const handlePrevView = () => {
    if (activeView === 0) {
      setActiveView(transformMultipliersState.length - 1);
    } else {
      setActiveView(activeView - 1);
    }
  };

  useEffect(() => {
    if (
      productsWrapper.current &&
      productsView.current &&
      !transformMultipliersState
    ) {
      const transformValues = [];
      const productsWrapperWidth = productsWrapper.current.getBoundingClientRect()
        .width;
      const productViewChildren = productsView.current.children;
      const productsViewWidth =
        productViewChildren[0].getBoundingClientRect().width *
        productViewChildren.length;
      let divider = productsViewWidth / productsWrapperWidth;

      let buffer = 0.0;
      transformValues.push(0);
      for (;;) {
        if (divider >= 1) {
          buffer += 1;
          transformValues.push(buffer);
          divider -= 1;
        } else {
          break;
        }
      }
      setTransformMultipliersState(transformValues);
      setTransformWidthState(productsWrapperWidth);
    }
  }, [isActive, transformMultipliersState]);

  useEffect(() => {
    if (transformMultipliersState) {
      gsap.to(productsView.current, {
        x: -transformWidthState * transformMultipliersState[activeView],
        duration: 0.2,
      });
    }
  }, [activeView, transformMultipliersState, transformWidthState]);

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

        <StyledTitle onClick={handleNextView}>
          Rekomendowane Akcesoria
        </StyledTitle>
        <StyledRecommendedProductsWrapper ref={productsWrapper}>
          <StyledRecommendedProductsView ref={productsView}>
            {recommendedProducts.map(
              ({ name, price, discount, score, reviewsCount, img }, index) => (
                <StyledRecommendedProductContainer key={index}>
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
                </StyledRecommendedProductContainer>
              )
            )}
          </StyledRecommendedProductsView>
          <StyledNextButton
            onClick={handleNextView}
            $isActive={
              transformMultipliersState
                ? activeView !== transformMultipliersState.length - 1
                : false
            }
          />
          <StyledPrevButton
            onClick={handlePrevView}
            rotate={-90}
            $isActive={transformMultipliersState ? activeView !== 0 : false}
          />
        </StyledRecommendedProductsWrapper>

        <StyledSummary>
          <StyledBasketCounterWrapper>
            <StyledBasketIconWrapper>
              <StyledBasketIcon icon={basketIcon} />
              <StyledBasketProductCount>1</StyledBasketProductCount>
            </StyledBasketIconWrapper>
            <StyledSummaryText onClick={handlePrevView}>
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
