import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import MainTemplate from "@templates/MainTemplate";
import { connect } from "react-redux";
import { useFontSize } from "@hooks/styled-components";
import { secondary } from "@constants/kinds";
import heartIcon from "@iconify/icons-clarity/heart-line";
import trashIcon from "@iconify/icons-clarity/trash-line";
import { Headline, BackButton } from "@components/atoms";
import { ProductCard, CustomSwiper } from "@components/molecules";
import { removeAllFromBasket as removeAllFromBasketAction } from "@actions";
import EmptyBasket from "./_components/EmptyBasket/EmptyBasket";
import IconTextButton from "./_components/IconTextButton/IconTextButton";
import BasketProduct from "./_components/BasketProduct/BasketProduct";
import WhyUs from "./_components/WhyUs/WhyUs";
import Summary from "./_components/Summary/Summary";
import { recommendedProducts } from "../Index/_dummyContent/dummyContent";

const StyledWrapper = styled.div`
  width: 90%;
  max-width: 1500px;
  margin: auto;
  margin-top: 40px;
`;

const StyledInnerWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const StyledLeftColumn = styled.div`
  flex: 1;
`;

const StyledRightColumn = styled.div`
  margin-left: 30px;
`;

const StyledNavigation = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.lightGray};
  padding: 0 10px;
  padding-bottom: 20px;
`;

const StyledHeadline = styled.h2`
  ${({ theme }) => useFontSize(theme, "l")}
  font-weight: 300;

  span {
    color: ${({ theme }) => theme.gray};
  }
`;

const StyledButtonsWrapper = styled.div``;

const StyledProductsWrapper = styled.div`
  width: 100%;
  margin-top: 30px;
`;

const StyledSection = styled.div`
  margin-top: 60px;
`;

const StyledSliderWrapper = styled.div`
  margin: 0 auto;
  margin-top: 30px;
  width: 90%;
`;

const StyledBackButton = styled(BackButton)`
  margin-top: 40px;
  margin-left: 15px;
`;

const Basket = ({ basket, removeAllProducts }) => {
  return (
    <MainTemplate footerKind={secondary}>
      <StyledWrapper>
        {basket.count > 0 ? (
          <>
            <StyledInnerWrapper>
              <StyledLeftColumn>
                <StyledNavigation>
                  <StyledHeadline>
                    Koszyk <span>({basket.count})</span>
                  </StyledHeadline>

                  <StyledButtonsWrapper>
                    <IconTextButton icon={heartIcon}>
                      Zapisz jako listę
                    </IconTextButton>
                    <IconTextButton
                      icon={trashIcon}
                      onClick={removeAllProducts}
                    >
                      Wyczyść koszyk
                    </IconTextButton>
                  </StyledButtonsWrapper>
                </StyledNavigation>

                <StyledProductsWrapper>
                  {basket.products.map(
                    ({ name, price, discount, count, img }, index) => (
                      <BasketProduct
                        price={price}
                        name={name}
                        discount={discount}
                        img={img}
                        count={count}
                        key={index}
                      />
                    )
                  )}
                </StyledProductsWrapper>
              </StyledLeftColumn>

              <StyledRightColumn>
                <Summary products={basket.products} />
              </StyledRightColumn>
            </StyledInnerWrapper>

            <StyledBackButton>Wróć do zakupów</StyledBackButton>
            <WhyUs />
          </>
        ) : (
          <EmptyBasket />
        )}
        <StyledSection>
          <Headline kind="secondary" as="h2">
            {basket.count > 0
              ? "Rekomendowane akcesoria"
              : "Ostatnio przeglądane"}
          </Headline>
          <StyledSliderWrapper>
            <CustomSwiper>
              {recommendedProducts[0].map((props, index) => (
                <ProductCard key={index} kind="secondary" {...props} />
              ))}
            </CustomSwiper>
          </StyledSliderWrapper>
        </StyledSection>
      </StyledWrapper>
    </MainTemplate>
  );
};

Basket.propTypes = {
  basket: PropTypes.object.isRequired,
  removeAllProducts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { basket } = state;

  return { basket };
};

const mapDispatchToProps = (dispatch) => ({
  removeAllProducts: () => dispatch(removeAllFromBasketAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
