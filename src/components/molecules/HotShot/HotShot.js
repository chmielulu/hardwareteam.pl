/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Progress } from "@components/atoms";
import formatPrice from "@utils/formatPrice";
import { useFontSize } from "@hooks/styled-components";
import { useCounter } from "@hooks/utils";

const StyledWrapper = styled.div`
  width: 440px;
  background: ${({ theme }) => theme.lighterGray};
  padding: 30px 50px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`;

const StyledHeadline = styled.h2`
  ${({ theme }) => useFontSize(theme, "xl")}
  font-weight: 300;
  margin-top: 5px;
`;

const StyledHeadlineColor = styled.span`
  color: ${({ theme }) => theme.primary};
`;

const StyledSave = styled.div`
  background: #fff;
  box-shadow: ${({ theme }) => theme.shadow2};
  border-radius: 10px;
  ${({ theme }) => useFontSize(theme)}
  font-weight: 300;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 30px;
`;

const StyledSavePrice = styled.span`
  display: block;
  font-weight: 500;
`;

const StyledInnerWrapper = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
  border-radius: 10px;
`;

const StyledName = styled.h3`
  font-weight: 300;
  ${({ theme }) => useFontSize(theme)}
  max-width: 100%;
  text-align: center;
  margin-top: 20px;
`;

const StyledPrice = styled.span`
  ${({ theme }) => useFontSize(theme, "l")}
  color: ${({ theme }) => theme.gray};
  text-decoration: line-through;
  font-weight: 300;
  margin-top: 10px;
`;

const StyledDiscount = styled.span`
  ${({ theme }) => useFontSize(theme, "xl")}
  font-weight: 500;
`;

const StyledProgressWrapper = styled.div`
  margin-top: 20px;
  width: 100%;
`;

const StyledProgress = styled(Progress)`
  width: 100%;
  height: 25px;
  background: #fff;
  border-radius: 25px;
`;

const StyledCountWrapper = styled.div`
  ${({ theme }) => useFontSize(theme)}
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-weight: 300;
`;

const StyledSoldCount = styled.span`
  background: ${({ theme }) => theme.gradient};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StyledLeftCount = styled.span``;

const StyledTimeWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 30px;
`;

const StyledTimeItem = styled.div`
  display: flex;
  ${({ theme }) => useFontSize(theme, "s")}
  font-weight: 300;
  flex-direction: column;
  align-items: center;
`;

const StyledTime = styled.span`
  ${({ theme }) => useFontSize(theme)}
`;

const StyledSpacer = styled.span`
  ${({ theme }) => useFontSize(theme, "l")}
  margin: 0 10px;
`;

const HotShot = ({
  timestamp,
  maxCount,
  currentCount,
  price,
  discount,
  name,
  img,
  ...props
}) => {
  const [hours, minutes, seconds] = useCounter(timestamp);

  return (
    <StyledWrapper {...props}>
      <StyledHeader>
        <StyledHeadline>
          #<StyledHeadlineColor>hot</StyledHeadlineColor>shot
        </StyledHeadline>
        <StyledSave>
          Osczędź
          <StyledSavePrice>{price - discount} zł</StyledSavePrice>
        </StyledSave>
      </StyledHeader>
      <StyledInnerWrapper>
        <StyledImg src={img} alt={name} />
        <StyledName>{name}</StyledName>
        <StyledPrice>{formatPrice(price)}</StyledPrice>
        <StyledDiscount>{formatPrice(discount)}</StyledDiscount>
        <StyledProgressWrapper>
          <StyledProgress min={0} max={maxCount} value={currentCount} />
          <StyledCountWrapper>
            <StyledSoldCount>Sprzedano {currentCount} szt.</StyledSoldCount>
            <StyledLeftCount>
              Pozostały {maxCount - currentCount} szt.
            </StyledLeftCount>
          </StyledCountWrapper>
        </StyledProgressWrapper>
        <StyledTimeWrapper>
          <StyledTimeItem>
            <StyledTime>{hours}</StyledTime>
            godzin
          </StyledTimeItem>
          <StyledSpacer>:</StyledSpacer>
          <StyledTimeItem>
            <StyledTime>{minutes}</StyledTime>
            minut
          </StyledTimeItem>
          <StyledSpacer>:</StyledSpacer>
          <StyledTimeItem>
            <StyledTime>{seconds}</StyledTime>
            sekund
          </StyledTimeItem>
        </StyledTimeWrapper>
      </StyledInnerWrapper>
    </StyledWrapper>
  );
};

HotShot.propTypes = {
  timestamp: PropTypes.number.isRequired,
  maxCount: PropTypes.number.isRequired,
  currentCount: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  discount: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default HotShot;
