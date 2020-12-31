import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import formatPrice from "@utils/formatPrice";
import { Img } from "react-image";
import { useFontSize, useFluidSize } from "@hooks/styled-components";

const StyledWrapper = styled.div`
  display: flex;
  padding-left: 40px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.lightGray};

  :last-of-type {
    border-bottom: 0;
  }

  @media (max-width: 1024px) {
    padding-left: ${useFluidSize({ min: 20, max: 40 })};
    padding-bottom: ${useFluidSize({ min: 15, max: 20 })};
  }

  @media (max-width: 360px) {
    padding-left: 20px;
    padding-bottom: 15px;
  }
`;

const StyledImageWrapper = styled.div``;

const StyledImage = styled(Img)`
  max-width: 135px;
  max-height: 135px;

  @media (max-width: 1024px) {
    max-width: ${useFluidSize({ min: 90, max: 135 })};
    max-height: ${useFluidSize({ min: 90, max: 135 })};
  }

  @media (max-width: 360px) {
    max-width: 90px;
    max-height: 90px;
  }
`;

const StyledContentWrapper = styled.div`
  padding-top: 20px;
  margin-left: 20px;

  @media (max-width: 1024px) {
    padding-top: ${useFluidSize({ min: 10, max: 20 })};
    margin-left: ${useFluidSize({ min: 10, max: 20 })};
  }

  @media (max-width: 360px) {
    padding-top: 10px;
    margin-left: 10px;
  }
`;

const StyledName = styled.h4`
  ${({ theme }) => useFontSize(theme, "m", "l")}
  font-weight: 300;
`;

const StyledInformationsWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: flex-end;
`;

const StyledPrice = styled.span`
  ${({ theme }) => useFontSize(theme, "m", "l")}
  font-weight: 400;
  margin-right: 10px;
`;

const StyledCount = styled.span`
  ${({ theme }) => useFontSize(theme, "m", "l")}
  color: ${({ theme }) => theme.darkGray};
  font-weight: 300;
`;

const SpecificProductCard = ({ name, img, price, count }) => {
  return (
    <StyledWrapper>
      <StyledImageWrapper>
        <StyledImage src={img} alt={name} />
      </StyledImageWrapper>
      <StyledContentWrapper>
        <StyledName>{name}</StyledName>
        <StyledInformationsWrapper>
          <StyledPrice>{formatPrice(price)}</StyledPrice>
          <StyledCount>{count} szt.</StyledCount>
        </StyledInformationsWrapper>
      </StyledContentWrapper>
    </StyledWrapper>
  );
};

SpecificProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
};

export default SpecificProductCard;
