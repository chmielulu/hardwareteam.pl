import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useWindowSize } from "@hooks/utils";
import BottomBar from "./_components/BottomBar/BottomBar";
import TopBar from "./_components/TopBar/TopBar";
import dummyContent from "./_dummyContent";
import MobileBar from "./_components/MobileBar/MobileBar";
import MobileNav from "./_components/MobileNav/MobileNav";

const StyledWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  box-shadow: ${({ theme }) => theme.shadow2};
  z-index: 1000;
  width: 100%;

  @media (max-width: 1024px) {
    position: absolute;
    overflow: hidden;
    height: 100vh;
    pointer-events: none;
  }
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 999;
  background: #000;
  opacity: 0;
  position: fixed;
  transition: opacity 0.2s ease-in-out;
  pointer-events: none;

  ${({ isActive }) =>
    isActive &&
    css`
      opacity: 0.4;
      pointer-events: all;
    `}
`;

const MobileNavWrapper = styled.div`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 85px 0 55px;
  position: fixed;
  transform: translateX(100%);
  transition: transform 0.4s ease-in-out;
  overflow-y: auto;
  overflow-x: hidden;

  @media (max-width: 768px) {
    padding: 55px 0;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      pointer-events: all;
      transform: translateX(0);
    `}
`;

function Navigation() {
  const [isDropDownActive, setDropDownActive] = useState(false);
  const size = useWindowSize();

  const [activeOption, setActiveOption] = useState(-1);
  const handleItemClick = (index) => setActiveOption(index);

  useEffect(() => {
    const bodyStyle = document.body.style;

    if (activeOption === 0) bodyStyle.overflow = "hidden";
    else bodyStyle.overflow = "";
  });

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
        {size.width <= 1024 && (
          <>
            <MobileNavWrapper isActive={activeOption === 0}>
              <MobileNav
                isActive={activeOption === 0}
                categories={dummyContent}
              />
            </MobileNavWrapper>
            <MobileBar
              categories={dummyContent}
              activeOption={activeOption}
              handleItemClick={handleItemClick}
            />
          </>
        )}
      </StyledWrapper>
      {size.width > 1024 && <Overlay isActive={isDropDownActive} />}
    </>
  );
}

export default Navigation;
