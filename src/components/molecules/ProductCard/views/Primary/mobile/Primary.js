/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
import { useFontSize } from "@hooks/styled-components";
import { Award, Attribute, Score, Button } from "@components/atoms";
import basketIcon from "@iconify/icons-clarity/shopping-cart-line";
import Information from "../../../_components/Information/Information";
import formatPrice from "../../../utils/formatPrice";

const StyledWrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.lightGray};
  padding: 40px 15px 20px;
  width: 100%;
  min-width: 300px;
`;

const StyledAwardsWrapper = styled.div`
  display: inline-flex;
  width: calc(100% + 20px);
  flex-wrap: wrap;
  margin: -20px 0 10px -20px;
`;

const StyledAward = styled(Award)`
  margin: 8px 0 0 20px;
`;

const StyledHeadline = styled.h3`
  ${({ theme }) => useFontSize(theme, "xl")};
  font-weight: 500;
  color: ${({ theme }) => theme.darkGray};
  margin: 0;
  margin-bottom: 10px;
`;

const StyledScoreWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledScore = styled(Score)`
  width: 110px;
  margin-right: 10px;
`;

const StyledReviewsCounter = styled.span`
  ${({ theme }) => useFontSize(theme, "m", "l")};
  color: ${({ theme }) => theme.gray};
`;

const StyledPhotoWrapper = styled.div`
  margin: 20px 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledPhoto = styled.img`
  max-height: 200px;
`;

const StyledPrice = styled.div`
  ${({ theme }) => useFontSize(theme, "xl", "xxl")};
  font-weight: 500;
  margin-bottom: 10px;
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
`;

const StyledDiscount = styled.div`
  ${({ theme }) => useFontSize(theme, "m")};
  font-weight: 400;
  text-decoration: line-through;
  color: ${({ theme }) => theme.gray};
`;

const StyledAttributesWrapper = styled.div`
  margin-bottom: 20px;
`;

const StyledAttribute = styled(Attribute)`
  margin-bottom: 10px;

  :last-of-type {
    margin-bottom: 0;
  }
`;

const StyledInformationsWrapper = styled.div`
  margin-bottom: 30px;
`;

const StyledInformation = styled(Information)`
  margin-bottom: 10px;
`;

const Primary = ({
  name,
  img,
  attributes,
  score,
  reviewsCount,
  price,
  informations,
  awards,
  discount,
}) => {
  return (
    <StyledWrapper>
      <StyledAwardsWrapper>
        {awards.map((kind, index) => (
          <StyledAward kind={kind} key={index} />
        ))}
      </StyledAwardsWrapper>
      <StyledHeadline>{name}</StyledHeadline>
      <StyledScoreWrapper>
        <StyledScore score={score} />
        <StyledReviewsCounter>({reviewsCount})</StyledReviewsCounter>
      </StyledScoreWrapper>
      <StyledPhotoWrapper>
        <StyledPhoto src={img} alt={name} />
      </StyledPhotoWrapper>
      <StyledPrice>
        {discount && <StyledDiscount>{formatPrice(discount)}</StyledDiscount>}
        {formatPrice(price)}
      </StyledPrice>
      <StyledAttributesWrapper>
        {attributes.map(({ name, value }, index) => (
          <StyledAttribute name={name} value={value} key={index} />
        ))}
      </StyledAttributesWrapper>
      <StyledInformationsWrapper>
        {informations.map((kind, index) => (
          <StyledInformation kind={kind} key={index} />
        ))}
      </StyledInformationsWrapper>
      <Button fullWidth icon={basketIcon}>
        Do koszyka
      </Button>
    </StyledWrapper>
  );
};

export default Primary;
