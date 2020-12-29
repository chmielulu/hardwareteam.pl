/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
import { useFontSize, useFluidSize } from "@hooks/styled-components";
import { useSortedAwards } from "@hooks/utils";
import { Award, Attribute, Score, Button } from "@components/atoms";
import basketIcon from "@iconify/icons-clarity/shopping-cart-line";
import formatPrice from "@utils/formatPrice";
import { Information } from "@components/atoms/";
import { Link } from "react-router-dom";

const StyledWrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.lightGray};
  padding: 40px 15px 40px;
  width: 100%;
  min-width: 300px;

  @media (max-width: 1024px) {
    padding: 40px 15px 20px;
  }
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
  margin-bottom: ${useFluidSize({ min: 10, max: 20 })};
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;

  @media (max-width: 360px) {
    margin-bottom: 10px;
  }
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

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  :hover {
    text-decoration: underline;
  }

  @media (max-width: 1024px) {
    :hover {
      text-decoration: none;
    }
  }
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
  addToBasket,
  ...props
}) => {
  const sortedAwards = useSortedAwards(awards);

  return (
    <StyledWrapper {...props}>
      {awards && (
        <StyledAwardsWrapper>
          {sortedAwards.slice(0, 3).map((kind, index) => (
            <StyledAward kind={kind} key={index} />
          ))}
        </StyledAwardsWrapper>
      )}
      <StyledLink to="/produkt/test">
        <StyledHeadline>{name}</StyledHeadline>
      </StyledLink>
      <StyledScoreWrapper>
        <StyledScore score={score} />
        <StyledReviewsCounter>({reviewsCount})</StyledReviewsCounter>
      </StyledScoreWrapper>
      <StyledPhotoWrapper>
        <StyledLink to="/produkt/test">
          <StyledPhoto src={img} alt={name} />
        </StyledLink>
      </StyledPhotoWrapper>
      <StyledPrice>
        {discount && <StyledDiscount>{formatPrice(discount)}</StyledDiscount>}
        {formatPrice(price)}
      </StyledPrice>
      <StyledAttributesWrapper>
        {attributes.slice(0, 5).map(({ name, value }, index) => (
          <StyledAttribute name={name} value={value} key={index} />
        ))}
      </StyledAttributesWrapper>
      <StyledInformationsWrapper>
        {informations.map((kind, index) => (
          <StyledInformation kind={kind} key={index} />
        ))}
      </StyledInformationsWrapper>
      <Button
        fullWidth
        icon={basketIcon}
        onClick={() =>
          addToBasket({
            name,
            img,
            attributes,
            score,
            reviewsCount,
            price,
            informations,
            awards,
            discount,
          })
        }
      >
        Do koszyka
      </Button>
    </StyledWrapper>
  );
};

export default Primary;
