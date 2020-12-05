import React from "react";
import styled from "styled-components";
import Icon from "@iconify/react";
import emailIcon from "@iconify/icons-clarity/email-line";
import { InputWithButton } from "@components/molecules";
import { useFluidSize, useFontSize } from "@hooks/styled-components";

const StyledWrapper = styled.div`
  background: ${({ theme }) => theme.lighterGray};
  border-radius: 10px;
  width: 80%;
  max-width: 1200px;
  padding: 40px 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 50px;

  @media (max-width: 1250px) {
    padding: 40px 50px;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
    padding: ${`${useFluidSize({ min: 20, max: 40 })} ${useFluidSize({
      min: 30,
      max: 50,
    })}`};
    margin: 0 0 ${useFluidSize({ min: 30, max: 50 })};
    width: 100%;
  }

  @media (max-width: 360px) {
    flex-direction: column;
    padding: 20px 30px;
    margin: 0 0 30px;
  }
`;

const StyledInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 30px;

  @media (max-width: 1024px) {
    margin-right: 0;
    margin-bottom: 15px;
  }
`;

const StyledIcon = styled(Icon)`
  font-size: 5rem;
  color: ${({ theme }) => theme.secondary};
  flex-shrink: 0;

  @media (max-width: 1024px) {
    font-size: ${useFluidSize({ min: 4, max: 5, unit: "rem" })};
  }

  @media (max-width: 360px) {
    font-size: 4rem;
  }
`;

const StyledTextWrapper = styled.div`
  margin-left: 15px;
`;

const StyledHeadline = styled.h2`
  ${({ theme }) => useFontSize(theme, "l", "xl")}
  font-weight: 400;
  margin-bottom: 5px;
`;

const StyledParagraph = styled.p`
  ${({ theme }) => useFontSize(theme, "m", "l")}
  font-weight: 300;
`;

const StyledInputWithButton = styled(InputWithButton)`
  input {
    width: 400px;
  }

  @media (max-width: 1470px) {
    input {
      width: 300px;
    }
  }

  @media (max-width: 1330px) {
    input {
      width: 250px;
    }
  }

  @media (max-width: 1250px) {
    input {
      width: 200px;
    }
  }

  @media (max-width: 1024px) {
    width: 100%;

    div {
      width: 100%;
      max-width: 500px;
      flex-grow: 1;

      input {
        width: 100%;
      }
    }
  }
`;

const Newsletter = () => {
  return (
    <StyledWrapper>
      <StyledInnerWrapper>
        <StyledIcon icon={emailIcon} />
        <StyledTextWrapper>
          <StyledHeadline>Newsletter</StyledHeadline>
          <StyledParagraph>
            Nie przegap żadnej okazji i zdobywaj kody rabatowe
          </StyledParagraph>
        </StyledTextWrapper>
      </StyledInnerWrapper>
      <StyledInputWithButton name="e-mail" label="Twój e-mail">
        Dodaj
      </StyledInputWithButton>
    </StyledWrapper>
  );
};

export default Newsletter;
