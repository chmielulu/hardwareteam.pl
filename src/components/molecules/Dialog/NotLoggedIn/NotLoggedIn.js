import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Icon from "@iconify/react";
import arrowIcon from "@iconify/icons-clarity/circle-arrow-line";
import userIcon from "@iconify/icons-clarity/user-line";
import boltIcon from "@iconify/icons-clarity/bolt-line";
import storeIcon from "@iconify/icons-clarity/store-solid";
import historyIcon from "@iconify/icons-clarity/history-line";
import tagsIcon from "@iconify/icons-clarity/tags-line";
import { Button } from "@components/atoms";
import { useFontSize } from "@hooks/styled-components";
import { useWindowSize } from "@hooks/utils";
import Window from "../_components/Window/Window";
import Spacer from "../_components/Spacer/Spacer";

const whyWorthRegisterItems = [
  { icon: boltIcon, text: "Szybsze kolejne zakupy" },
  { icon: storeIcon, text: "Zakupy w aż 4 sklepach" },
  { icon: historyIcon, text: "Pełna historia zamówień" },
  { icon: tagsIcon, text: "Dostęp do rabatów i promocji" },
];

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;

  @media (max-width: 1024px) {
    padding: 40px 25px;
    width: 100%;
    max-width: 500px;
    margin: auto;
  }
`;

const StyledTitle = styled.h2`
  ${({ theme }) => useFontSize(theme, "xl", "xxl")};
  font-weight: 300;
  margin-bottom: 30px;
`;

const StyledListWrapper = styled.div`
  margin-top: 30px;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const StyledSecondTitle = styled.h3`
  ${({ theme }) => useFontSize(theme, "m", "xl")};
  margin-bottom: 15px;
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
`;

const StyledItem = styled.li`
  ${({ theme }) => useFontSize(theme, "m", "l")};
  font-weight: 300;
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  :last-of-type {
    margin-bottom: 0;
  }
`;

const StyledIcon = styled(Icon)`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.secondary};
  margin-right: 10px;
`;

const NotLoggedIn = ({ isActive, onClose }) => {
  const { width } = useWindowSize();

  return (
    <Window isActive={isActive} onClose={onClose} title="Logowanie">
      <StyledWrapper>
        <StyledTitle>Nie masz konta?</StyledTitle>
        <Button
          icon={arrowIcon}
          position="right"
          rotateIcon={90}
          fullWidth={width <= 1024}
        >
          Kontunuuj jako gość
        </Button>
        <Spacer />
        <Button icon={userIcon} kind="tertiary" fullWidth={width <= 1024}>
          Zaloguj się lub zarejestruj
        </Button>
        <StyledListWrapper>
          <StyledSecondTitle>
            Dlaczego warto u nas założyć konto?
          </StyledSecondTitle>
          <StyledList>
            {whyWorthRegisterItems.map(({ icon, text }, index) => (
              <StyledItem key={index}>
                <StyledIcon icon={icon} />
                {text}
              </StyledItem>
            ))}
          </StyledList>
        </StyledListWrapper>
      </StyledWrapper>
    </Window>
  );
};

NotLoggedIn.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default NotLoggedIn;
