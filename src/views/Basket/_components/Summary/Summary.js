import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import formatPrice from "@utils/formatPrice";
import { useFontSize } from "@hooks/styled-components";
import { useWindowSize } from "@hooks/utils";
import { Button, CircleButton } from "@components/atoms";
import { InputWithButton } from "@components/molecules";
import shoppingBagIcon from "@iconify/icons-clarity/shopping-bag-line";
import dollarIcon from "@iconify/icons-clarity/dollar-line";
import { tertiary } from "@constants/kinds";
import { connect } from "react-redux";
import trashIcon from "@iconify/icons-clarity/trash-line";

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

const StyledTop = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

const StyledPriceWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1024px) {
    margin: 20px 0;
    justify-content: space-between;
  }

  ${({ $isDiscount }) =>
    $isDiscount &&
    css`
      @media (max-width: 1024px) {
        margin-top: 0;
      }
    `}
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

const StyledDiscountCodesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  margin-top: 10px;

  @media (max-width: 1024px) {
    order: -1;
    margin-top: 20px;
    border-bottom: 1px solid ${({ theme }) => theme.lightGray};
    padding-bottom: 10px;
  }
`;

const StyledDiscount = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.lightGray};
  padding: 10px 7px;
  position: relative;

  :first-of-type {
    border-top: 1px solid ${({ theme }) => theme.lightGray};
  }

  @media (max-width: 1024px) {
    align-items: center;
    padding: 10px 0;

    :last-of-type {
      margin-bottom: 0;
      border-bottom: 0;
      padding-bottom: 0;
    }

    :first-of-type {
      border-top: 0;
    }
  }
`;

const StyledDiscountHeadline = styled.span`
  ${({ theme }) => useFontSize(theme, "m", "l")}
  font-weight: 300;
`;

const StyledDiscountPrice = styled.span`
  ${({ theme }) => useFontSize(theme, "m", "l")}
  font-weight: 500;
  color: #34ac4f;
  margin-left: auto;
`;

const StyledCircleButton = styled(CircleButton)`
  position: absolute;
  left: calc(100% + 5px);
  top: 50%;
  transform: translateY(-50%);

  @media (max-width: 1024px) {
    position: static;
    transform: translateY(0);
    padding: 0;
    margin-left: 15px;
  }
`;

const Summary = ({
  basket,
  handleOpenDialog,
  isBottomBarHidden,
  addDiscountCode,
  removeDiscountCode,
}) => {
  const { products, discountCodes } = basket;
  const [summaryPrice, setSummaryPrice] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);
  const [discountCode, setDiscountCode] = useState("");

  const { width } = useWindowSize();

  useEffect(() => {
    let sumPrice = 0;
    let finalPrice = 0;

    products.forEach(({ discount, price, count }) => {
      sumPrice += (discount || price) * count;
    });

    finalPrice = sumPrice;
    if (discountCodes) {
      discountCodes.forEach(({ discount }) => {
        const price = sumPrice * (discount / 100);
        finalPrice -= price;
      });
    }

    setSummaryPrice(sumPrice);
    setFinalPrice(finalPrice);
  }, [products, discountCodes]);

  useEffect(() => {
    setDiscountCode("");
  }, [discountCodes]);

  const handleInputChange = ({ target }) => {
    setDiscountCode(target.value);
  };

  const handleKeyDown = ({ key, target }) => {
    if (key === "Enter" && discountCode) {
      addDiscountCode(discountCode);
      target.blur();
    }

    return null;
  };

  return (
    <StyledWrapper $isBottomBarHidden={isBottomBarHidden}>
      <StyledTop>
        <StyledPriceWrapper
          $isDiscount={discountCodes ? discountCodes.length !== 0 : false}
        >
          <StyledHeadline>Łączna kwota</StyledHeadline>
          <StyledPrice>{formatPrice(finalPrice)}</StyledPrice>
        </StyledPriceWrapper>
        {(discountCodes ? discountCodes.length !== 0 : false) && (
          <StyledDiscountCodesWrapper>
            {discountCodes.map(({ discount, code }) => (
              <StyledDiscount key={code}>
                <StyledDiscountHeadline>Kod rabatowy</StyledDiscountHeadline>
                <StyledDiscountPrice>
                  -{formatPrice(summaryPrice * (discount / 100))}
                </StyledDiscountPrice>
                <StyledCircleButton
                  label="Usuń kod rabatowy"
                  icon={trashIcon}
                  onClick={() => removeDiscountCode(code)}
                />
              </StyledDiscount>
            ))}
          </StyledDiscountCodesWrapper>
        )}
      </StyledTop>

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
      <StyledInputWithButton
        name="discount-code"
        label="Kod rabatowy"
        value={discountCode}
        onChange={handleInputChange}
        onClick={() => addDiscountCode(discountCode)}
        onKeyDown={handleKeyDown}
      >
        Dodaj
      </StyledInputWithButton>
    </StyledWrapper>
  );
};

Summary.propTypes = {
  basket: PropTypes.object.isRequired,
  handleOpenDialog: PropTypes.func.isRequired,
  isBottomBarHidden: PropTypes.bool.isRequired,
  addDiscountCode: PropTypes.func.isRequired,
  removeDiscountCode: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { navigation } = state;
  return { isBottomBarHidden: navigation.isBottomBarHidden };
};

export default connect(mapStateToProps)(Summary);
