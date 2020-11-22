import React, { useState } from "react";
import styled, { css } from "styled-components";
import { useWindowSize } from "@hooks/utils";
import BottomBar from "./_components/BottomBar/BottomBar";
import TopBar from "./_components/TopBar/TopBar";
import dummyContent from "./_dummyContent";
import MobileBar from "./_components/MobileBar/MobileBar";

const StyledWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  box-shadow: ${({ theme }) => theme.shadow2};
  z-index: 2;
  background: #fff;
  width: 100vw;
  overflow-x: hidden;

  @media (max-width: 1024px) {
    position: relative;
  }
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 1;
  background: #000;
  opacity: 0;
  position: fixed;
  transition: opacity 0.2s ease-in-out;

  ${({ isActive }) =>
    isActive &&
    css`
      opacity: 0.4;
    `}
`;

function Navigation() {
  const [isDropDownActive, setDropDownActive] = useState(false);
  const size = useWindowSize();

  return (
    <>
      <StyledWrapper>
        <TopBar innerSizes={size} />
        {size.width > 1024 && (
          <BottomBar
            categories={dummyContent}
            isDropDownActive={isDropDownActive}
            setDropDownActive={setDropDownActive}
          />
        )}
        {size.width <= 1024 && <MobileBar categories={dummyContent} />}
      </StyledWrapper>
      {size.width > 1024 && <Overlay isActive={isDropDownActive} />}
    </>
  );
}

export default Navigation;
