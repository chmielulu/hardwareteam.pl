/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
import { useFontSize } from "@hooks/styled-components";
import { Award, Attribute, Score, Button } from "@components/atoms";
import basketIcon from "@iconify/icons-clarity/shopping-cart-line";
import { useSortedAwards, useWindowSize } from "@hooks/utils";
import formatPrice from "@utils/formatPrice";
import MobilePrimary from "./mobile/Primary";
import ComparedButton from "../../_components/ComparedButton/ComparedButton";
import Information from "../../_components/Information/Information";

const StyledWrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.lightGray};
  padding: 0 25px 60px;
  max-width: 1225px;
  width: 100%;

  @media (max-width: 1140px) {
    padding: 0 0 40px;
  }
`;

const StyledHeadline = styled.h3`
  ${({ theme }) => useFontSize(theme, "xl")};
  font-weight: 500;
  color: ${({ theme }) => theme.darkGray};
  margin: 0;
  margin-bottom: 40px;
  width: 80%;
  max-height: 85px;
  line-height: 1.3;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledInnerWrapper = styled.div`
  width: 100%;
  display: flex;
  padding-left: 45px;

  @media (max-width: 1420px) {
    padding-left: 0;
  }
`;

const StyledFirstColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledSecondColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 10px;
  margin: 0 auto;
`;

const StyledThirdColumn = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 175px;
`;

const StyledPhoto = styled.img`
  max-height: 225px;
  max-width: 245px;
  margin-bottom: 25px;
`;

const StyledAwardsWrapper = styled.div`
  display: flex;
  max-width: 360px;
  flex-wrap: wrap;

  @media (max-width: 1420px) {
    max-width: unset;
    flex-wrap: unset;
    flex-direction: column;
    margin-bottom: 20px;
  }
`;

const StyledAward = styled(Award)`
  :first-of-type {
    margin-right: 25px;
  }
  margin-bottom: 15px;
`;

const StyledAttributesWrapper = styled.div``;

const StyledAttribute = styled(Attribute)`
  margin-bottom: 10px;
  user-select: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  :last-of-type {
    margin-bottom: 0;
  }
`;

const StyledScoreWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
`;

const StyledScore = styled(Score)`
  width: 110px;
  margin-right: 10px;
  position: relative;
  flex-grow: 2;
`;

const StyledReviewsCounter = styled.span`
  ${({ theme }) => useFontSize(theme)};
  color: ${({ theme }) => theme.gray};
`;

const StyledPrice = styled.div`
  ${({ theme }) => useFontSize(theme, "xl")};
  font-weight: 500;
  margin: 20px 0;
  display: flex-end;
  justify-content: inline-flex;
  max-width: 100%;
  flex-direction: column;
`;

const StyledDiscount = styled.div`
  ${({ theme }) => useFontSize(theme, "m")};
  font-weight: 400;
  text-decoration: line-through;
  color: ${({ theme }) => theme.gray};
`;

const StyledInformationsWrapper = styled.div``;

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
  ...props
}) => {
  const sortedAwards = useSortedAwards(awards);
  const { width } = useWindowSize();

  if (width <= 1380)
    return (
      <MobilePrimary
        name={name}
        img={img}
        attributes={attributes}
        score={score}
        reviewsCount={reviewsCount}
        price={price}
        informations={informations}
        awards={awards}
        discount={discount}
        {...props}
      />
    );
  return (
    <StyledWrapper {...props}>
      <StyledHeadline>{name}</StyledHeadline>
      <StyledInnerWrapper>
        <StyledFirstColumn>
          <StyledPhoto src={img} alt={name} />
          <ComparedButton />
        </StyledFirstColumn>
        <StyledSecondColumn>
          {awards && (
            <StyledAwardsWrapper>
              {sortedAwards.slice(0, 3).map((kind, index) => (
                <StyledAward kind={kind} key={index} />
              ))}
            </StyledAwardsWrapper>
          )}
          <StyledAttributesWrapper>
            {attributes.slice(0, 5).map(({ name, value }, index) => (
              <StyledAttribute name={name} value={value} key={index} />
            ))}
          </StyledAttributesWrapper>
        </StyledSecondColumn>
        <StyledThirdColumn>
          <div>
            <StyledScoreWrapper>
              <StyledScore score={score} />
              <StyledReviewsCounter>({reviewsCount})</StyledReviewsCounter>
            </StyledScoreWrapper>
            <StyledPrice>
              {discount && (
                <StyledDiscount>{formatPrice(discount)}</StyledDiscount>
              )}
              {formatPrice(price)}
            </StyledPrice>
            <StyledInformationsWrapper>
              {informations.map((kind, index) => (
                <StyledInformation kind={kind} key={index} />
              ))}
            </StyledInformationsWrapper>
          </div>
          <Button icon={basketIcon}>Do koszyka</Button>
        </StyledThirdColumn>
      </StyledInnerWrapper>
    </StyledWrapper>
  );
};

export default Primary;
