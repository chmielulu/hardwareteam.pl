import React from "react";
import styled from "styled-components";
import { useFontSize } from "@hooks/styled-components";
import { Award, Attribute, Score, Button } from "@components/atoms";
import basketIcon from "@iconify/icons-clarity/shopping-cart-line";
import huaweiImg from "@assets/images/huaweiPhone.png";
import ComparedButton from "./_components/ComparedButton/ComparedButton";
import Information from "./_components/Information/Information";

const StyledWrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.lightGray};
  padding: 0 25px 60px;
`;

const StyledHeadline = styled.h3`
  ${({ theme }) => useFontSize(theme, "xl")};
  font-weight: 500;
  color: ${({ theme }) => theme.darkGray};
  margin: 0;
  margin-bottom: 40px;
`;

const StyledInnerWrapper = styled.div`
  width: 100%;
  display: flex;
  padding-left: 45px;
`;

const StyledFirstColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 100px;
`;

const StyledSecondColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 10px;
`;

const StyledThirdColumn = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledPhoto = styled.img`
  max-height: 225px;
  margin-bottom: 25px;
`;

const StyledAwardsWrapper = styled.div`
  display: flex;
  max-width: 360px;
  flex-wrap: wrap;
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
  ${({ theme }) => useFontSize(theme)};
  color: ${({ theme }) => theme.gray};
`;

const StyledPrice = styled.div`
  ${({ theme }) => useFontSize(theme, "xl")};
  font-weight: 500;
  margin: 20px 0;
`;

const StyledInformationsWrapper = styled.div``;

const StyledInformation = styled(Information)`
  margin-bottom: 10px;
`;

const ProductCard = () => {
  return (
    <StyledWrapper>
      <StyledHeadline>
        Smartfon Huawei Y6P 64GB Dual SIM Fioletowy
      </StyledHeadline>
      <StyledInnerWrapper>
        <StyledFirstColumn>
          <StyledPhoto
            src={huaweiImg}
            alt="Smartfon Huawei Y6P 64GB Dual SIM Fioletowy"
          />
          <ComparedButton />
        </StyledFirstColumn>
        <StyledSecondColumn>
          <StyledAwardsWrapper>
            <StyledAward kind="valueForMoney" />
            <StyledAward kind="bestseller" />
            <StyledAward kind="recommendable" />
          </StyledAwardsWrapper>
          <StyledAttributesWrapper>
            <StyledAttribute name="Ekran" value="6,3" />
            <StyledAttribute
              name="Procesor"
              value="MediaTek MT6762R Helio P22"
            />
            <StyledAttribute name="Pamięć RAM" value="3GB" />
            <StyledAttribute name="Pamięć wbudowana" value="64GB" />
            <StyledAttribute name="System" value="Android 10" />
          </StyledAttributesWrapper>
        </StyledSecondColumn>
        <StyledThirdColumn>
          <div>
            <StyledScoreWrapper>
              <StyledScore score={5} />
              <StyledReviewsCounter>(2)</StyledReviewsCounter>
            </StyledScoreWrapper>
            <StyledPrice>559,00 zł</StyledPrice>
            <StyledInformationsWrapper>
              <StyledInformation kind="time" />
              <StyledInformation kind="delivery" />
            </StyledInformationsWrapper>
          </div>
          <Button icon={basketIcon}>Do koszyka</Button>
        </StyledThirdColumn>
      </StyledInnerWrapper>
    </StyledWrapper>
  );
};

export default ProductCard;
