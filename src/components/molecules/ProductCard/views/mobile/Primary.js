import React from "react";
import styled from "styled-components";
import { useFontSize } from "@hooks/styled-components";
import { Award, Attribute, Score, Button } from "@components/atoms";
import basketIcon from "@iconify/icons-clarity/shopping-cart-line";
import huaweiImg from "@assets/images/huaweiPhone.png";
import Information from "../../_components/Information/Information";

const StyledWrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.lightGray};
  padding: 40px 15px 20px;
  width: 100%;
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
  justify-content: center;
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

const Primary = () => {
  return (
    <StyledWrapper>
      <StyledAwardsWrapper>
        <StyledAward kind="valueForMoney" />
        <StyledAward kind="bestseller" />
        <StyledAward kind="recommendable" />
      </StyledAwardsWrapper>
      <StyledHeadline>
        Smartfon Huawei Y6P 64GB Dual SIM Fioletowy
      </StyledHeadline>
      <StyledScoreWrapper>
        <StyledScore score={5} />
        <StyledReviewsCounter>(2)</StyledReviewsCounter>
      </StyledScoreWrapper>
      <StyledPhotoWrapper>
        <StyledPhoto src={huaweiImg} />
      </StyledPhotoWrapper>
      <StyledPrice>559,00 zł</StyledPrice>
      <StyledAttributesWrapper>
        <StyledAttribute name="Ekran" value="6,3" />
        <StyledAttribute name="Procesor" value="MediaTek MT6762R Helio P22" />
        <StyledAttribute name="Pamięć RAM" value="3GB" />
      </StyledAttributesWrapper>
      <StyledInformationsWrapper>
        <StyledInformation kind="time" />
        <StyledInformation kind="delivery" />
      </StyledInformationsWrapper>
      <Button fullWidth icon={basketIcon}>
        Do koszyka
      </Button>
    </StyledWrapper>
  );
};

export default Primary;
