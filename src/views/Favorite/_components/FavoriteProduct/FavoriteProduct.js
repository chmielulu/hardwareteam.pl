import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled, { ThemeContext, css } from "styled-components";
import { Checkbox } from "@components/atoms";
import { ProductCard } from "@components/molecules";
import { tertiary } from "@constants/kinds";
import shoppingIcon from "@iconify/icons-clarity/shopping-cart-line";
import trashIcon from "@iconify/icons-clarity/trash-line";
import formatPrice from "@utils/formatPrice";
import { useFontSize } from "@hooks/styled-components";
import SpecificButton from "../Button/Button";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 30px 20px;
  border-bottom: 1px solid ${({ theme }) => theme.lightGray};

  :last-of-type {
    border-bottom: 0;
  }
`;

const StyledCheckbox = styled(Checkbox)`
  margin-right: 10px;
  div {
    width: 20px;
    height: 20px;
  }

  svg {
    font-size: 2.5rem;
  }
`;

const StyledProductCard = styled(ProductCard)`
  width: 67%;
`;

const StyledRenderWrapper = styled.div``;

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

const StyledButtonsWrapper = styled.div`
  margin-left: auto;
  display: flex;
`;

const FavoriteProduct = ({ name, img, price, discount, checked, onChange }) => {
  const { primary: primaryColor } = useContext(ThemeContext);

  return (
    <StyledWrapper>
      <StyledCheckbox name="is_checked" checked={checked} onChange={onChange} />
      <StyledProductCard
        kind={tertiary}
        name={name}
        img={img}
        size="big"
        onlyTextLink
        render={() => (
          <StyledRenderWrapper>
            {!!discount && (
              <StyledDiscount>{formatPrice(discount)}</StyledDiscount>
            )}
            <StyledPrice $isDiscount={!!discount}>
              {formatPrice(price)}
            </StyledPrice>
          </StyledRenderWrapper>
        )}
      />
      <StyledButtonsWrapper>
        <SpecificButton color={primaryColor} icon={shoppingIcon}>
          Do koszyka
        </SpecificButton>
        <SpecificButton icon={trashIcon}>Usuń</SpecificButton>
      </StyledButtonsWrapper>
    </StyledWrapper>
  );
};

FavoriteProduct.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  discount: PropTypes.number,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

FavoriteProduct.defaultProps = {
  discount: null,
};

export default FavoriteProduct;
