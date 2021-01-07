import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import MainTemplate from "@templates/MainTemplate";
import { connect } from "react-redux";
import { useFontSize } from "@hooks/styled-components";
import { secondary } from "@constants/kinds";
import heartIcon from "@iconify/icons-clarity/heart-line";
import trashIcon from "@iconify/icons-clarity/trash-line";
import { Headline, BackButton } from "@components/atoms";
import { ProductCard, CustomSwiper, WhyUs } from "@components/molecules";
import { removeAllFromBasket as removeAllFromBasketAction } from "@actions";
import routes from "@routes";
import { useWindowSize } from "@hooks/utils";
import NotLoggedInDialog from "@components/molecules/Dialog/NotLoggedIn/NotLoggedIn";
import EmptyBasket from "./_components/EmptyBasket/EmptyBasket";
import IconTextButton from "./_components/IconTextButton/IconTextButton";
import BasketProduct from "./_components/BasketProduct/BasketProduct";
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

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const StyledLeftColumn = styled.div`
  flex: 1;
`;

const StyledRightColumn = styled.div`
  margin-left: 30px;

  @media (max-width: 1024px) {
    margin-left: 0;
    margin-top: 20px;
  }
`;

const StyledNavigation = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.lightGray};
  padding: 0 10px;
  padding-bottom: 20px;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
    border-bottom: 0;
    padding: 0;
  }
`;

const StyledHeadline = styled.h2`
  ${({ theme }) => useFontSize(theme, "l", "xl")}
  font-weight: 300;

  span {
    color: ${({ theme }) => theme.gray};
  }

  @media (max-width: 1024px) {
    margin-bottom: 15px;
    padding: 0 10px;
  }
`;

const StyledButtonsWrapper = styled.div`
  @media (max-width: 1024px) {
    border-top: 1px solid ${({ theme }) => theme.lightGray};
    border-bottom: 1px solid ${({ theme }) => theme.lightGray};
    width: 100%;
    padding: 0 10px;
    display: flex;
    flex-wrap: wrap;
  }
`;

const StyledProductsWrapper = styled.div`
  width: 100%;
  margin-top: 30px;
`;

const StyledSection = styled.div`
  margin-top: 40px;

  @media (max-width: 1024px) {
    margin-top: 30px;
  }
`;

const StyledSliderWrapper = styled.div`
  margin-top: 30px;

  @media (max-width: 1024px) {
    margin-top: 10px;
  }
`;

const StyledBackButton = styled(BackButton)`
  margin-top: 40px;
  margin-left: 15px;
`;

const Basket = ({ basket, removeAllProducts }) => {
  const { width } = useWindowSize();
  const [isDialogActive, setDialogActive] = useState(false);

  const handleOpenDialog = () => setDialogActive(true);
  const handleCloseDialog = () => setDialogActive(false);

  return (
    <MainTemplate footerKind={secondary} title={`Koszyk (${basket.count})`}>
      <>
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
                  <Summary
                    basket={basket}
                    handleOpenDialog={handleOpenDialog}
                  />
                </StyledRightColumn>
              </StyledInnerWrapper>

              {width > 1024 && (
                <>
                  <StyledBackButton to={routes.index}>
                    Wróć do zakupów
                  </StyledBackButton>
                  <WhyUs />
                </>
              )}
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
        <NotLoggedInDialog
          isActive={isDialogActive}
          onClose={handleCloseDialog}
        />
      </>
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
