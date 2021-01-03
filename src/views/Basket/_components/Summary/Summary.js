import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import formatPrice from "@utils/formatPrice";
import { useFontSize } from "@hooks/styled-components";
import { useWindowSize } from "@hooks/utils";
import { Button } from "@components/atoms";
import { InputWithButton } from "@components/molecules";
import shoppingBagIcon from "@iconify/icons-clarity/shopping-bag-line";
import dollarIcon from "@iconify/icons-clarity/dollar-line";
import { tertiary } from "@constants/kinds";
import { connect } from "react-redux";

const StyledWrapper = styled.div`
  width: 360px;
  padding: 30px;
  border: 1px solid ${({ theme }) => theme.lightGray};
  border-radius: 10px;
  position: sticky;
  top: 150px;
  transition: transform 0.2s ease-in-out;

  @media (max-width: 1024px) {
    position: static;
    top: unset;
    border-radius: 0;
    padding: 0;
    border: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  ${({ $isBottomBarHidden }) =>
    $isBottomBarHidden &&
    css`
      @media (min-width: 1024px) {
        transform: translateY(-45px);
      }

      @media (max-width: 1752px) {
        transform: translateY(-50px);
      }
    `}
`;

const StyledPriceWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1024px) {
    margin: 20px 0;
    justify-content: space-between;
  }
`;

const StyledHeadline = styled.span`
  ${({ theme }) => useFontSize(theme, "l", "xl")}
  font-weight: 300;
`;

const StyledPrice = styled.span`
  ${({ theme }) => useFontSize(theme, "l", "xl")}
  font-weight: 500;
  margin-left: 15px;
`;

const StyledFreeShipment = styled.span`
  ${({ theme }) => useFontSize(theme)}
  font-weight: 300;
  color: ${({ theme }) => theme.secondary};
  margin-top: 10px;
  display: block;
`;

const StyledButton = styled(Button)`
  padding: 12px 25px;

  :first-of-type {
    margin-top: 30px;
    margin-bottom: 10px;

    @media (max-width: 1024px) {
      margin-top: 0;
    }
  }

  :last-of-type {
    margin-bottom: 15px;
  }
`;

const StyledInputWithButton = styled(InputWithButton)`
  @media (max-width: 1024px) {
    order: -1;
    div {
      flex: 1;
    }
  }
`;

const Summary = ({ basket, handleOpenDialog, isBottomBarHidden }) => {
  const [summaryPrice, setSummaryPrice] = useState(0);
  const { width } = useWindowSize();

  useEffect(() => {
    const { products } = basket;
    let sumPrice = 0;

    products.forEach(({ discount, price, count }) => {
      sumPrice += (discount || price) * count;
    });

    setSummaryPrice(sumPrice);
  }, [basket]);

  return (
    <StyledWrapper $isBottomBarHidden={isBottomBarHidden}>
      <StyledPriceWrapper>
        <StyledHeadline>Łączna kwota</StyledHeadline>
        <StyledPrice>{formatPrice(summaryPrice)}</StyledPrice>
      </StyledPriceWrapper>
      {width > 1024 && (
        <StyledFreeShipment>
          do darmowej dostawy brakuje ci 0 zł
        </StyledFreeShipment>
      )}
      <StyledButton icon={shoppingBagIcon} onClick={handleOpenDialog}>
        Przejdź do dostawy
      </StyledButton>
      <StyledButton icon={dollarIcon} kind={tertiary}>
        Oblicz ratę lub leasing
      </StyledButton>
      <StyledInputWithButton name="discount-code" label="Kod rabatowy">
        Dodaj
      </StyledInputWithButton>
    </StyledWrapper>
  );
};

Summary.propTypes = {
  basket: PropTypes.object.isRequired,
  handleOpenDialog: PropTypes.func.isRequired,
  isBottomBarHidden: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  const { navigation } = state;
  return { isBottomBarHidden: navigation.isBottomBarHidden };
};

export default connect(mapStateToProps)(Summary);
