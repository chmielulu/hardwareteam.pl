import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { ProductCard } from "@components/molecules";
import { useFontSize } from "@hooks/styled-components";
import { tertiary } from "@constants/kinds";
import formatPrice from "@utils/formatPrice";

const StyledRenderWrapper = styled.div``;

const StyledProductPrice = styled.span`
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

const StyledProductDiscount = styled.span`
  ${({ theme }) => useFontSize(theme, "m", "l")}
  font-weight: 500;
  margin-right: 10px;

  @media (max-width: 1024px) {
    order: 1;
  }
`;

const StyledProductCount = styled.span`
  ${({ theme }) => useFontSize(theme, "m", "l")}
  font-weight: 300;
  margin-left: 10px;
`;

const Product = ({ price, discount, name, img, count, ...props }) => {
  return (
    <ProductCard
      kind={tertiary}
      price={price}
      discount={discount}
      name={name}
      img={img}
      onlyTextLink
      render={() => (
        <StyledRenderWrapper>
          {discount && (
            <StyledProductDiscount>
              {formatPrice(discount)}
            </StyledProductDiscount>
          )}
          <StyledProductPrice $isDiscount={!!discount}>
            {formatPrice(price)}
          </StyledProductPrice>
          <StyledProductCount>{count} szt.</StyledProductCount>
        </StyledRenderWrapper>
      )}
      {...props}
    />
  );
};

Product.propTypes = {
  price: PropTypes.number.isRequired,
  discount: PropTypes.number,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

Product.defaultProps = {
  discount: null,
};

export default Product;
