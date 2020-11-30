import React from "react";
import styled from "styled-components";
import Icon from "@iconify/react";
import basketIcon from "@iconify/icons-clarity/shopping-cart-line";

const StyledButton = styled.button`
  padding: 5px;
  background-color: #fff;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    background-color: ${({ theme }) => theme.primary};
  }
`;

const StyledIcon = styled(Icon)`
  font-size: 2.4rem;
  color: ${({ theme }) => theme.primary};
  transition: color 0.2s ease;

  ${StyledButton}:hover & {
    color: #fff;
  }
`;

const BasketButton = ({ ...props }) => (
  <StyledButton aria-labelledby="Dodaj do koszyka" {...props}>
    <StyledIcon icon={basketIcon} />
  </StyledButton>
);

export default BasketButton;
