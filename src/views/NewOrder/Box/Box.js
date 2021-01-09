import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { useFontSize } from "@hooks/styled-components";
import formatPrice from "@utils/formatPrice";
import { Button } from "@components/atoms";
import { DiscountCodesInputWithButton } from "@components/organisms";
import arrowIcon from "@iconify/icons-clarity/circle-arrow-line";
import { useWindowSize } from "@hooks/utils";
import Product from "../Product/Product";

const StyledWrapper = styled.div`
  width: 580px;
  border: 1px solid ${({ theme }) => theme.lightGray};
  border-radius: 10px;
  position: sticky;
  top: 25px;
  overflow: hidden;

  @media (max-width: 1480px) {
    width: 480px;
  }

  @media (max-width: 1280px) {
    width: 420px;
  }

  @media (max-width: 1024px) {
    top: unset;
    position: static;
    width: 100%;
    border: 0;
  }
`;

const StyledContainer = styled.div`
  padding: 40px 50px;
  border-bottom: 1px solid ${({ theme }) => theme.lightGray};

  :first-of-type {
    max-height: 290px;
    overflow-y: auto;
  }

  :last-of-type {
    border-bottom: 0;
  }

  @media (max-width: 1280px) {
    padding: 40px 35px;
  }

  @media (max-width: 1024px) {
    :first-of-type {
      max-height: unset;
    }
    padding: 0;
  }
`;

const StyledInnerWrapper = styled.div`
  width: 335px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    width: 100%;
    /* max-width: 500px; */
  }
`;

const StyledSummaryPriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.lightGray};
  margin-bottom: 15px;

  @media (max-width: 1024px) {
    border-bottom: 0;
    border-top: 1px solid ${({ theme }) => theme.lightGray};
    padding: 15px 10px 0 10px;
    padding-bottom: 0;
    margin-top: 15px;
    margin-bottom: 0;
  }
`;

const StyledHeadline = styled.h4`
  ${({ theme }) => useFontSize(theme, "l", "xl")}
  font-weight: 300;
`;

const StyledSummaryPrice = styled.p`
  ${({ theme }) => useFontSize(theme, "l", "xl")}
  font-weight: 500;
`;

const StyledPriceComponent = styled.div`
  ${({ theme }) => useFontSize(theme, "m", "l")};
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  ${({ $last }) =>
    $last &&
    css`
      margin-bottom: 0;
    `}

  @media (max-width: 1024px) {
    order: -1;
    padding: 0 10px;
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

  @media (max-width: 1024px) {
    order: 2;
  }

  @media (max-width: 1024px) {
    margin-top: 20px;
  }
`;

const StyledDiscountCodesInputWithButton = styled(DiscountCodesInputWithButton)`
  width: 100%;
  margin-top: 10px;

  div {
    width: 70%;
  }

  button {
    flex: 1;
  }

  @media (max-width: 1024px) {
    padding: 0 10px;
    margin-top: 30px;

    button {
      width: 100px;
      flex: unset;
    }

    div {
      flex: 1;
    }
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

const Box = ({ basket, level, activePayment, activeShipment }) => {
  const [basketValue, setBasketValue] = useState(0);
  const [discountSum, setDiscountSum] = useState(0);
  const [values, setValues] = useState([]);
  const { width } = useWindowSize();

  useEffect(() => {
    const { products } = basket;
    let sumPrice = 0;
    let sumDiscount = 0;

    products.forEach(({ count, price, discount }) => {
      sumPrice += (discount || price) * count;

      if (discount) {
        sumDiscount -= price - discount;
      }
    });

    const values = [];

    if (basket.discountCodes) {
      values.push(
        ...basket.discountCodes.map(({ discount }) => ({
          name: "Kod rabatowy",
          price: -(sumPrice * (discount / 100)),
        }))
      );
    }

    values.push(
      {
        name: "Płatność",
        price: activePayment.price,
      },
      {
        name: "Dostawa",
        price: activeShipment.price,
      }
    );

    values.forEach(({ price }) => {
      sumPrice += price;
    });

    setBasketValue(sumPrice);
    setValues(values);

    if (sumDiscount < 0) {
      setDiscountSum(sumDiscount);
    }
  }, [basket, activePayment, activeShipment]);

  return (
    <StyledWrapper>
      {width > 1024 && (
        <StyledContainer>
          {basket.products.map(({ name, ...props }) => (
            <StyledProduct name={name} key={name} {...props} />
          ))}
        </StyledContainer>
      )}
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
          {values.map(({ name, price }, index) => (
            <StyledPriceComponent
              key={name}
              $last={index === values.length - 1}
            >
              <StyledPriceComponentName>{name}</StyledPriceComponentName>
              <StyledPrice $green={price < 0}>{formatPrice(price)}</StyledPrice>
            </StyledPriceComponent>
          ))}

          <StyledButton
            icon={arrowIcon}
            position="right"
            rotateIcon={90}
            fullWidth
            type="submit"
          >
            {level === 1 ? "Przejdź do podsumowania" : "Kupuję i płacę"}
          </StyledButton>

          {level === 1 && <StyledDiscountCodesInputWithButton />}
        </StyledInnerWrapper>
      </StyledContainer>
    </StyledWrapper>
  );
};

Box.propTypes = {
  basket: PropTypes.object.isRequired,
  level: PropTypes.number.isRequired,
  activeShipment: PropTypes.object.isRequired,
  activePayment: PropTypes.object.isRequired,
};

export default Box;
