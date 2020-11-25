import React, { useState } from "react";
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
  z-index: 2;
  background: #fff;
  width: 100vw;

  @media (max-width: 1024px) {
    position: relative;
    overflow: hidden;
    height: 100vh;
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

const MobileNavWrapper = styled.div`
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  padding: 85px 0 55px;
  position: relative;
  transform: translateX(100%);
  transition: transform 0.4s ease-in-out;
  overflow-y: scroll;
  overflow-x: hidden;

  @media (max-width: 768px) {
    padding: 55px 0;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      transform: translateX(0);
    `}
`;

function Navigation() {
  const [isDropDownActive, setDropDownActive] = useState(false);
  const size = useWindowSize();

  const [activeOption, setActiveOption] = useState(-1);
  const handleItemClick = (index) => setActiveOption(index);

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
