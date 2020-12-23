import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import formatPrice from "@utils/formatPrice";
import { Img } from "react-image";
import { useFontSize } from "@hooks/styled-components";

const StyledWrapper = styled.div`
  display: flex;
  padding-left: 40px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.lightGray};

  :last-of-type {
    border-bottom: 0;
  }
`;

const StyledImageWrapper = styled.div``;

const StyledImage = styled(Img)`
  max-width: 135px;
  max-height: 135px;
`;

const StyledContentWrapper = styled.div`
  padding-top: 20px;
`;

const StyledName = styled.h4`
  ${({ theme }) => useFontSize(theme)}
  font-weight: 300;
`;

const StyledInformationsWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: flex-end;
`;

const StyledPrice = styled.span`
  ${({ theme }) => useFontSize(theme)}
  font-weight: 400;
  margin-right: 10px;
`;

const StyledCount = styled.span`
  ${({ theme }) => useFontSize(theme)}
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
