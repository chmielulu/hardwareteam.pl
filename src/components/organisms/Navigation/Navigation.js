import React, { useState } from "react";
import styled, { css } from "styled-components";
import BottomBar from "./_components/BottomBar/BottomBar";
import TopBar from "./_components/TopBar/TopBar";
import dummyContent from "./_dummyContent";

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  box-shadow: ${({ theme }) => theme.shadow2};
  z-index: 2;
  background: #fff;
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

  return (
    <>
      <StyledWrapper>
        <TopBar />
        <BottomBar
          categories={dummyContent}
          isDropDownActive={isDropDownActive}
          setDropDownActive={setDropDownActive}
        />
      </StyledWrapper>
      <Overlay isActive={isDropDownActive} />
    </>
  );
}

export default Navigation;
