import React from "react";
import styled from "styled-components";
import UserTemplate from "@templates/UserTemplate";
import { useFontSize } from "@hooks/styled-components";
import { Input, Button } from "@components/atoms";
import Icon from "@iconify/react";
import bundleIcon from "@iconify/icons-clarity/bundle-solid";
import clockIcon from "@iconify/icons-clarity/clock-line";
import dollarIcon from "@iconify/icons-clarity/dollar-line";
import extractLink from "@utils/extractLink";
import { tertiary } from "@constants/kinds";

const StyledWrapper = styled.div`
  margin-top: 35px;
`;

const StyledSection = styled.div`
  margin-bottom: 35px;

  :last-of-type {
    margin-bottom: 0;
  }
`;

const StyledSectionHeadline = styled.h3`
  ${({ theme }) => useFontSize(theme, "l")}
  font-weight: 400;
  margin-bottom: 30px;
`;

const StyledFormWrapper = styled.div`
  width: 470px;
`;

const StyledInput = styled(Input)`
  margin-bottom: 10px;
`;

const StyledButton = styled(Button)`
  margin-top: 20px;
`;

const StyledTypesOfSubmissionWrapper = styled.div`
  display: flex;
`;

const StyledTypeOfSubmission = styled.div`
  width: 270px;
  margin-right: 40px;
  height: 280px;
  display: flex;
  flex-direction: column;
`;

const StyledHeadline = styled.h4`
  ${({ theme }) => useFontSize(theme)}
  font-weight: 400;
  margin-bottom: 18px;
`;

const StyledList = styled.ul`
  list-style-type: none;
`;

const StyledItem = styled.li`
  display: inline-flex;
  flex-shrink: 0;
  margin-bottom: 10px;
`;

const StyledIcon = styled(Icon)`
  font-size: 2.2rem;
  margin-right: 10px;
  color: ${({ theme }) => theme.secondary};
`;

const StyledText = styled.p`
  ${({ theme }) => useFontSize(theme)}
  font-weight: 300;
  flex: 1;
  line-height: 1.3;
`;

const StyledTypeOfSubmissionButton = styled(Button)`
  margin-top: auto;
`;

const types = [
  {
    name: "Reklamacja",
    list: [
      {
        icon: bundleIcon,
        text: "Na przykład produkt nie działa w prawidłowy sposób",
      },
      {
        icon: clockIcon,
        text:
          "2 lata od dnia stwierdzenia wady w przypadku rękojmi lub zgodnie ze wskazaniem producenta w przypadku gwarancji",
      },
    ],
    button: "Zgłoś reklamację",
  },
  {
    name: "Zwrot lub wymiana",
    list: [
      {
        icon: bundleIcon,
        text: "Bez podania przyczyny zwrotu lub wymiany",
      },
      {
        icon: clockIcon,
        text:
          "Do 15 dni od odebrania przesyłki złóż oświadczenie o odstąpieniu od umowy",
      },
      {
        icon: dollarIcon,
        text: "Do 3 dni zwrócimy Ci pieniądze<zobacz jak to działa>",
        link: "/",
      },
    ],
    button: "Zgłoś zwrot lub wymianę",
  },
];

const Returns = () => {
  return (
    <UserTemplate Headline={() => <>Zwroty i Reklamacje</>}>
      <StyledWrapper>
        <StyledSection>
          <StyledSectionHeadline>
            Sprawdź status reklamacji lub zwrotu w Hardware Team
          </StyledSectionHeadline>
          <StyledFormWrapper>
            <StyledInput
              name="mail_or_phone"
              label="E-mail lub telefon"
              autoComplete="off"
            />
            <StyledInput
              name="order_number"
              label="Numer zlecenia"
              autoComplete="off"
            />
            <StyledButton fullWidth>Sprawdź status</StyledButton>
          </StyledFormWrapper>
        </StyledSection>
        <StyledSection>
          <StyledSectionHeadline>
            Wybierz rodzaj zgłoszenia
          </StyledSectionHeadline>
          <StyledTypesOfSubmissionWrapper>
            {types.map(({ name, list, button }) => (
              <StyledTypeOfSubmission>
                <StyledHeadline>{name}</StyledHeadline>
                <StyledList>
                  {list.map(({ icon, text, link }) => (
                    <StyledItem>
                      <StyledIcon icon={icon} />
                      <StyledText>
                        {link ? extractLink(text, { link }) : text}
                      </StyledText>
                    </StyledItem>
                  ))}
                </StyledList>
                <StyledTypeOfSubmissionButton kind={tertiary} fullWidth>
                  {button}
                </StyledTypeOfSubmissionButton>
              </StyledTypeOfSubmission>
            ))}
          </StyledTypesOfSubmissionWrapper>
        </StyledSection>
      </StyledWrapper>
    </UserTemplate>
  );
};

export default Returns;
