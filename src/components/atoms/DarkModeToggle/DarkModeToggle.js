import React, { useEffect, useLayoutEffect, useState } from "react";
import styled, { css } from "styled-components";
import {
  enable as enableDarkMode,
  disable as disableDarkMode,
} from "darkreader";
import { useLocalStorage } from "@hooks/utils";
import Icon from "@iconify/react";
import moonIcon from "@iconify/icons-clarity/moon-line";
import sunIcon from "@iconify/icons-clarity/sun-line";
import { useLocation } from "react-router-dom";
import routes from "@routes";

const StyledButton = styled.button`
  position: fixed;
  right: 15px;
  bottom: 15px;
  width: 45px;
  height: 45px;
  cursor: pointer;
  border-radius: 50%;
  border: 0;
  background: ${({ theme }) => theme.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;

  @media (max-width: 1024px) {
    bottom: 65px;
  }

  ${({ $reduceBottom }) =>
    $reduceBottom &&
    css`
      @media (max-width: 1024px) {
        bottom: 15px;
      }
    `}
`;

const StyledIcon = styled(Icon)`
  color: #fff;
  font-size: 2.5rem;
`;

const testPathname = (path) => {
  const testPaths = [
    routes.login,
    routes.register,
    routes.notFound,
    routes.newOrder,
    routes.newOrderSummary,
    routes.newOrderDone,
  ];

  let result;

  testPaths.forEach((test) => {
    if (path.includes(test)) {
      result = true;
    }
  });

  return result;
};

const DarkModeToggle = () => {
  const { pathname } = useLocation();
  const [reduceBottom, setReduceBottom] = useState(false);
  const [isDarkMode, setDarkMode] = useLocalStorage("darkmode", false);

  useEffect(() => {
    if (isDarkMode) {
      enableDarkMode({
        brightness: 100,
        contrast: 90,
        sepia: 0,
      });
    } else {
      disableDarkMode();
    }
  }, [isDarkMode]);

  const toggle = () => setDarkMode(!isDarkMode);

  useLayoutEffect(() => {
    if (testPathname(pathname)) {
      setReduceBottom(true);
    } else {
      setReduceBottom(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <StyledButton
      title={isDarkMode ? "Tryb jasny" : "Tryb ciemny"}
      aria-label={isDarkMode ? "Tryb jasny" : "Tryb ciemny"}
      onClick={toggle}
      $reduceBottom={reduceBottom}
    >
      <StyledIcon icon={isDarkMode ? sunIcon : moonIcon} />
    </StyledButton>
  );
};

export default DarkModeToggle;
