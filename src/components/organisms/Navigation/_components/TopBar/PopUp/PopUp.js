import React from "react";
import styled from "styled-components";
import phoneIcon from "@iconify-icons/clarity/mobile-phone-line";
import emailIcon from "@iconify/icons-clarity/email-line";
import Icon from "@iconify/react";
import { useFontSize } from "@hooks/styled-components";

const StyledWrapper = styled.div`
  position: absolute;
  z-index: 5;
  left: 0;
  top: 0;
  width: 100%;
  height: 68px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.25);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  @media (max-width: 1300px) {
    height: 64px;
  }
`;

const PopUpWindow = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background: #fff;
  width: 280px;
  height: 160px;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.25);
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  flex-direction: column;
  padding-top: 25px;
  padding-left: 15px;
`;

const PopUpRow = styled.div`
  display: flex;

  :last-of-type {
    align-items: center;
    margin-top: 10px;
  }
`;

const PopUpIconColumn = styled.div``;

const PopUpContentColumn = styled.div`
  ${({ theme }) => useFontSize(theme)};
  font-weight: 300;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const PopUpHeadline = styled.span`
  background: ${({ theme }) => theme.gradient};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  ${PopUpRow}:first-of-type & {
    margin-bottom: 10px;
  }
`;

const PopUpParagraph = styled.span`
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.darkGray};
`;

const PopUpTime = styled.span`
  color: ${({ theme }) => theme.black};

  ${PopUpParagraph}:last-of-type & {
    margin-left: 10px;
  }
`;

const StyledIcon = styled(Icon)`
  font-size: 3rem;
`;

const PopUp = ({ ...props }) => (
  <StyledWrapper {...props}>
    <PopUpWindow>
      <PopUpRow>
        <PopUpIconColumn>
          <StyledIcon icon={phoneIcon} />
        </PopUpIconColumn>
        <PopUpContentColumn>
          <PopUpHeadline>+48 14 300 00 25</PopUpHeadline>
          <PopUpParagraph>
            pon. - pt. <PopUpTime>8:00 - 21:00</PopUpTime>
          </PopUpParagraph>
          <PopUpParagraph>
            pt. - niedz. <PopUpTime>8:00 - 19:00</PopUpTime>
          </PopUpParagraph>
        </PopUpContentColumn>
      </PopUpRow>
      <PopUpRow>
        <PopUpIconColumn>
          <StyledIcon icon={emailIcon} />
        </PopUpIconColumn>
        <PopUpContentColumn>
          <PopUpHeadline>kontakt@hardwareteam.pl</PopUpHeadline>
        </PopUpContentColumn>
      </PopUpRow>
    </PopUpWindow>
  </StyledWrapper>
);

export default PopUp;
