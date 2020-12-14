import React, { useState } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { Input } from "@components/atoms";
import { ProductCard } from "@components/molecules";
import { tertiary } from "@constants/kinds";
import { useFontSize } from "@hooks/styled-components";
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
`;

const StyledProduct = styled(ProductCard)`
  flex: 1;
  margin-left: 10px;
`;

const StyledPrice = styled.span`
  ${({ theme }) => useFontSize(theme)}
  font-weight: 500;

  ${({ $isDiscount }) =>
    $isDiscount &&
    css`
      color: ${({ theme }) => theme.gray};
      text-decoration: line-through;
      ${({ theme }) => useFontSize(theme, "s")}
    `}
`;

const StyledDiscount = styled.span`
  ${({ theme }) => useFontSize(theme)}
  font-weight: 500;
  margin-right: 10px;
`;

const StyledInput = styled(Input)`
  width: 40px;
  margin-right: 15px;

  input {
    padding: 10px 5px;
    text-align: center;
  }
`;

const StyledRender = styled.div`
  display: flex;
  padding-top: 10px;
  align-items: center;
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
`;

const StyledIcon = styled(Icon)`
  font-size: 2rem;

  ${StyledDeleteButton}:hover & {
    color: #e85160;
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
            {discount && (
              <StyledDiscount>{formatPrice(discount)}</StyledDiscount>
            )}
            <StyledPrice $isDiscount={!!discount}>
              {formatPrice(price)}
            </StyledPrice>
          </StyledRender>
        )}
      />
      <StyledDeleteButton
        aria-label="Usuń produkt z koszyka"
        onClick={() => removeProduct({ name, count: countProp })}
      >
        <StyledIcon icon={trashIcon} />
      </StyledDeleteButton>
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
