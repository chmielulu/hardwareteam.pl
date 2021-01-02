import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useFontSize } from "@hooks/styled-components";
import formatPrice from "@utils/formatPrice";
import { Button } from "@components/atoms";
import { InputWithButton } from "@components/molecules";
import arrowIcon from "@iconify/icons-clarity/circle-arrow-line";
import { Link } from "react-router-dom";
import routes from "@routes/";
import Product from "../Product/Product";

const StyledWrapper = styled.div`
  width: 580px;
  border: 1px solid ${({ theme }) => theme.lightGray};
  border-radius: 10px;
  position: sticky;
  top: 25px;
  overflow: hidden;
`;

const StyledContainer = styled.div`
  padding: 40px 50px;
  border-bottom: 1px solid ${({ theme }) => theme.lightGray};

  :first-of-type {
    max-height: 46vh;
    overflow-y: auto;
  }

  :last-of-type {
    border-bottom: 0;
  }
`;

const StyledInnerWrapper = styled.div`
  width: 335px;
`;

const StyledSummaryPriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.lightGray};
  margin-bottom: 15px;
`;

const StyledHeadline = styled.h4`
  ${({ theme }) => useFontSize(theme, "l")}
  font-weight: 300;
`;

const StyledSummaryPrice = styled.p`
  ${({ theme }) => useFontSize(theme, "l")}
  font-weight: 500;
`;

const StyledPriceComponent = styled.div`
  ${({ theme }) => useFontSize(theme)}
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  :last-of-type {
    margin-bottom: 0;
  }
`;

const StyledPriceComponentName = styled.p`
  font-weight: 300;
`;

const StyledPrice = styled.p`
  font-weight: 500;
  color: ${({ $green, theme }) => ($green ? "#34AC4F" : theme.black)};
`;

const StyledButton = styled(Button)`
  margin-top: 30px;
`;

const StyledInputWithButton = styled(InputWithButton)`
  width: 100%;
  margin-top: 10px;

  div {
    width: 70%;
  }

  button {
    flex: 1;
  }
`;

const StyledProduct = styled(Product)`
  border-bottom: 1px solid ${({ theme }) => theme.lightGray};
  margin-bottom: 15px;
  padding-bottom: 10px;

  :last-of-type {
    border-bottom: 0;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

const Box = ({ basket, values, level }) => {
  const [basketValue, setBasketValue] = useState(0);
  const [discountSum, setDiscountSum] = useState(0);

  useEffect(() => {
    const { products } = basket;
    let sumPrice = 0;
    let sumDiscount = 0;

    products.forEach(({ count, price, discount }) => {
      sumPrice += (discount || price) * count;

      if (discount) {
        sumDiscount -= discount;
      }
    });

    values.forEach(({ price }) => {
      sumPrice += price;
    });

    setBasketValue(sumPrice);

    if (sumDiscount < 0) {
      setDiscountSum(sumDiscount);
    }
  }, [basket, values]);

  return (
    <StyledWrapper>
      <StyledContainer>
        {basket.products.map(({ name, ...props }) => (
          <StyledProduct name={name} key={name} {...props} />
        ))}
      </StyledContainer>
      <StyledContainer>
        <StyledInnerWrapper>
          <StyledSummaryPriceWrapper>
            <StyledHeadline>Łączna kwota</StyledHeadline>
            <StyledSummaryPrice>{formatPrice(basketValue)}</StyledSummaryPrice>
          </StyledSummaryPriceWrapper>
          {discountSum !== 0 && discountSum < 0 && (
            <StyledPriceComponent>
              <StyledPriceComponentName>Przecena</StyledPriceComponentName>
              <StyledPrice $green>{formatPrice(discountSum)}</StyledPrice>
            </StyledPriceComponent>
          )}
          {values.map(({ name, price }) => (
            <StyledPriceComponent key={name}>
              <StyledPriceComponentName>{name}</StyledPriceComponentName>
              <StyledPrice $green={price < 0}>{formatPrice(price)}</StyledPrice>
            </StyledPriceComponent>
          ))}

          <StyledButton
            icon={arrowIcon}
            position="right"
            rotateIcon={90}
            fullWidth
            forwardedAs={Link}
            to={level === 1 ? routes.newOrderSummary : routes.newOrderDone}
          >
            {level === 1 ? "Przejdź do podsumowania" : "Kupuję i płacę"}
          </StyledButton>

          {level === 1 && (
            <StyledInputWithButton name="discountCode" label="Kod rabatowy">
              Dodaj
            </StyledInputWithButton>
          )}
        </StyledInnerWrapper>
      </StyledContainer>
    </StyledWrapper>
  );
};

Box.propTypes = {
  basket: PropTypes.object.isRequired,
  values: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.number,
    })
  ).isRequired,
  level: PropTypes.number.isRequired,
};

export default Box;
