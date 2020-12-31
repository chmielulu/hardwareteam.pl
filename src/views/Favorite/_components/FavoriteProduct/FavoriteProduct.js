import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled, { ThemeContext, css } from "styled-components";
import { Checkbox, ToolBox } from "@components/atoms";
import { ProductCard } from "@components/molecules";
import { tertiary } from "@constants/kinds";
import shoppingIcon from "@iconify/icons-clarity/shopping-cart-line";
import trashIcon from "@iconify/icons-clarity/trash-line";
import formatPrice from "@utils/formatPrice";
import { useFontSize, useFluidSize } from "@hooks/styled-components";
import { useWindowSize } from "@hooks/utils";
import SpecificButton from "../Button/Button";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 30px 20px;
  border-bottom: 1px solid ${({ theme }) => theme.lightGray};
  position: relative;

  :last-of-type {
    border-bottom: 0;
  }

  @media (max-width: 1024px) {
    padding: 30px 10px 30px ${useFluidSize({ min: 10, max: 20 })};

    :last-of-type {
      border-bottom: 1px solid ${({ theme }) => theme.lightGray};
    }
  }

  @media (max-width: 360px) {
    padding: 30px 10px 30px 10px;
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

  @media (max-width: 1024px) {
    div {
      width: ${useFluidSize({ min: 15, max: 20 })};
      height: ${useFluidSize({ min: 15, max: 20 })};
    }

    svg {
      font-size: ${useFluidSize({ min: 2, max: 2.5, unit: "rem" })};
    }
  }

  @media (max-width: 360px) {
    div {
      width: 15px;
      height: 15px;
    }

    svg {
      font-size: 2rem;
    }
  }
`;

const StyledProductCard = styled(ProductCard)`
  flex: 1;
`;

const StyledRenderWrapper = styled.div`
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
  display: inline-flex;
  flex-shrink: 0;
`;

const StyledToolBox = styled(ToolBox)`
  position: absolute;
  top: 30px;
  right: 30px;

  @media (max-width: 1024px) {
    right: 0;
  }
`;

const FavoriteProduct = ({ name, img, price, discount, checked, onChange }) => {
  const { primary: primaryColor } = useContext(ThemeContext);
  const { width } = useWindowSize();

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
      {width > 1280 ? (
        <StyledButtonsWrapper>
          <SpecificButton color={primaryColor} icon={shoppingIcon}>
            Do koszyka
          </SpecificButton>
          <SpecificButton icon={trashIcon}>Usuń</SpecificButton>
        </StyledButtonsWrapper>
      ) : (
        <StyledToolBox
          content={[
            { name: "Do koszyka", color: primaryColor, icon: shoppingIcon },
            { name: "Usuń", icon: trashIcon },
          ]}
        />
      )}
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
