import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { CSSTransition } from "react-transition-group";
import Icon from "@iconify/react";
import closeIcon from "@iconify/icons-clarity/close-line";
import arrowIcon from "@iconify/icons-clarity/arrow-line";
import { useFontSize } from "@hooks/styled-components";
import { useWindowSize } from "@hooks/utils";

const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  overflow: hidden;
  pointer-events: none;
  left: 0;
  top: 0;

  ${({ $isActive }) =>
    $isActive &&
    css`
      pointer-events: all;
    `}
`;

const StyledWindow = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, 50vh) scale(0.8);
  background: #fff;
  box-shadow: 0px 0px 29px -8px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.5s ease-in-out;

  ${({ $width }) =>
    $width &&
    css`
      width: ${`${$width}px`};
    `}

  &.window-enter {
    transform: translate(-50%, 50vh) scale(0.8);
  }

  &.window-enter-done {
    transform: translate(-50%, -50%) scale(1);
  }

  &.window-exit {
    transform: translate(-50%, 50vh) scale(0.8);
  }

  @media (max-width: 1024px) {
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    transform: translateX(-100vw);
    border-radius: 0;
    min-width: 280px;

    &.window-enter {
      transform: translateX(-100vw);
    }

    &.window-enter-done {
      transform: translateX(0);
    }

    &.window-exit {
      transform: translateX(-100vw);
    }
  }
`;

const StyledWindowTitleBar = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.lighterGray};
  height: 60px;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1024px) {
    justify-content: flex-start;
  }
`;

const StyledIcon = styled(Icon)`
  font-size: 2.5rem;
  cursor: pointer;
  transform: rotate(-90deg) !important;
  padding: 10px;
  box-sizing: content-box;
  margin-right: -10px;

  @media (max-width: 1024px) {
    order: -1;
    margin-right: 10px;
    margin-left: -10px;
  }
`;

const StyledTitle = styled.h3`
  ${({ theme }) => useFontSize(theme, "l", "xl")};
  font-weight: 300;
`;

const StyledContentWrapper = styled.div`
  position: relative;
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0;
  position: relative;
  z-index: -1;
  transition: opacity 0.5s ease-in-out;

  ${({ $isActive }) =>
    $isActive &&
    css`
      opacity: 0.25;
    `}
`;

const Window = ({ children, isActive, title, onClose, width }) => {
  const { width: windowWidth } = useWindowSize();

  return (
    <StyledWrapper $isActive={isActive}>
      <CSSTransition
        in={isActive}
        classNames="window"
        unmountOnExit
        timeout={{ appear: 500, enter: 0, exit: 500 }}
      >
        <StyledWindow $width={width}>
          <StyledWindowTitleBar>
            <StyledTitle>{title}</StyledTitle>
            <StyledIcon
              icon={windowWidth <= 1024 ? arrowIcon : closeIcon}
              onClick={onClose}
            />
          </StyledWindowTitleBar>
          <StyledContentWrapper>{children}</StyledContentWrapper>
        </StyledWindow>
      </CSSTransition>
      <Overlay $isActive={isActive} />
    </StyledWrapper>
  );
};

Window.propTypes = {
  children: PropTypes.node.isRequired,
  isActive: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  width: PropTypes.number,
};

Window.defaultProps = {
  width: 500,
};

export default Window;
