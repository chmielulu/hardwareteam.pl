import React from "react";
import styled from "styled-components";
import { useFontSize } from "@hooks/styled-components";
import { Button } from "@components/atoms";
import { Link } from "react-router-dom";
import arrowIcon from "@iconify/icons-clarity/circle-arrow-line";

const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 70px;
`;

const StyledHeadline = styled.h2`
  ${({ theme }) => useFontSize(theme, "l")}
  font-weight: 400;
  margin-bottom: 10px;
`;

const StyledParagraph = styled.p`
  ${({ theme }) => useFontSize(theme)}
  color: ${({ theme }) => theme.gray};
  margin-bottom: 20px;
`;

const EmptyBasket = () => {
  return (
    <StyledSection>
      <StyledHeadline>Twój koszyk jest pusty</StyledHeadline>
      <StyledParagraph>Szukasz czegoś dla siebie?</StyledParagraph>
      <Button icon={arrowIcon} as={Link} to="/" rotateIcon={-90}>
        Przejdź do strony głównej
      </Button>
    </StyledSection>
  );
};

export default EmptyBasket;
