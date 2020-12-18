import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { Input } from "@components/atoms";
import { ProductCard } from "@components/molecules";
import { tertiary } from "@constants/kinds";
import { useFontSize, useFluidSize } from "@hooks/styled-components";
import { useWindowSize } from "@hooks/utils";
import formatPrice from "@utils/formatPrice";
import Icon from "@iconify/react";
import trashIcon from "@iconify/icons-clarity/trash-line";
import { connect } from "react-redux";
import { removeFromBasket as removeFromBasketAction } from "@actions";

const StyledWrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  width: 100%;
  padding-left: 10px;
  position: relative;
  border-top: 1px solid ${({ theme }) => theme.lightGray};
  padding-top: 20px;

  :first-of-type {
    border-top: 0;
    padding-top: 0;
  }

  :last-of-type {
    margin-bottom: 0;
  }

  @media (max-width: 1024px) {
    border-bottom: 1px solid ${({ theme }) => theme.lightGray};
    padding-bottom: 20px;
  }
`;

const StyledProduct = styled(ProductCard)`
  flex: 1;
  margin-left: 10px;
`;

const StyledPriceWrapper = styled.div`
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

const StyledPrice = styled.span`
  ${({ theme }) => useFontSize(theme, "m", "l")}
  font-weight: 500;

  ${({ $isDiscount }) =>
    $isDiscount &&
    css`
      color: ${({ theme }) => theme.gray};
      text-decoration: line-through;
      ${({ theme }) => useFontSize(theme, "s", "xs")}
    `}

  @media (max-width: 1024px) {
    order: 0;
  }
`;

const StyledDiscount = styled.span`
  ${({ theme }) => useFontSize(theme, "m", "l")}
  font-weight: 500;
  margin-right: 10px;

  @media (max-width: 1024px) {
    order: 1;
  }
`;

const StyledInput = styled(Input)`
  width: 40px;
  margin-right: 15px;

  input {
    padding: 10px 5px;
    text-align: center;
  }

  @media (max-width: 1024px) {
    width: ${useFluidSize({ min: 20, max: 40 })};
    margin-right: 10px;

    input {
      padding: ${useFluidSize({ min: 5, max: 10 })} 5px;
      border-radius: 5px;
    }
  }
`;

const StyledRender = styled.div`
  display: flex;
  padding-top: 10px;
  align-items: center;

  @media (max-width: 620px) {
    padding-top: 0;
  }
`;

const StyledDeleteButton = styled.button`
  background: transparent;
  width: 40px;
  height: 40px;
  border: 0;
  position: absolute;
  right: 15px;
  top: 20px;
  cursor: pointer;
  border-radius: 50%;
  outline: none;

  ${StyledWrapper}:first-of-type & {
    top: 0;
  }

  :hover {
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
  }

  :focus {
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 1024px) {
    position: static;
    margin-left: auto;
  }
`;

const StyledIcon = styled(Icon)`
  font-size: 2rem;

  ${StyledDeleteButton}:hover & {
    color: #e85160;
  }

  @media (max-width: 1024px) {
    font-size: ${useFluidSize({ min: 1.5, max: 2, unit: "rem" })};
  }

  @media (max-width: 360px) {
    font-size: 1.5rem;
  }
`;

const BasketProduct = ({
  name,
  img,
  price,
  discount,
  count: countProp,
  removeProduct,
}) => {
  const [count, setCount] = useState(countProp);
  const { width } = useWindowSize();

  useEffect(() => {
    setCount(countProp);
  }, [countProp]);

  const DeleteButton = () => (
    <StyledDeleteButton
      aria-label="Usuń produkt z koszyka"
      onClick={() => removeProduct({ name, count: countProp })}
    >
      <StyledIcon icon={trashIcon} />
    </StyledDeleteButton>
  );

  return (
    <StyledWrapper>
      <StyledProduct
        kind={tertiary}
        size="big"
        name={name}
        img={img}
        render={() => (
          <StyledRender>
            <StyledInput
              max={10}
              min={1}
              value={count.toString()}
              onChange={({ value }) => setCount(value)}
              name={`${name}-count`}
              label="Count"
            />
            <StyledPriceWrapper>
              {discount && (
                <StyledDiscount>{formatPrice(discount * count)}</StyledDiscount>
              )}
              <StyledPrice $isDiscount={!!discount}>
                {formatPrice(price * count)}
              </StyledPrice>
            </StyledPriceWrapper>
            {width <= 1024 && <DeleteButton />}
          </StyledRender>
        )}
      />
      {width > 1024 && <DeleteButton />}
    </StyledWrapper>
  );
};

BasketProduct.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  discount: PropTypes.number,
  count: PropTypes.number.isRequired,
  removeProduct: PropTypes.func.isRequired,
};

BasketProduct.defaultProps = {
  discount: null,
};

const mapDispatchToProps = (dispatch) => ({
  removeProduct: (product) => dispatch(removeFromBasketAction(product)),
});

export default connect(null, mapDispatchToProps)(BasketProduct);
