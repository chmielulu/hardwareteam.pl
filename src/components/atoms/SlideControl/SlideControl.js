import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { useFluidSize, useFontSize } from "@hooks/styled-components";
import extractLink from "@utils/extractLink";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledInnerWrapper = styled.div`
  position: relative;
  min-width: 35px;
  width: 35px;
  height: 20px;
  margin-right: 10px;

  @media (max-width: 1024px) {
    min-width: ${useFluidSize({ min: 32, max: 35 })};
    width: ${useFluidSize({ min: 32, max: 35 })};
    height: ${useFluidSize({ min: 17, max: 20 })};
  }

  @media (max-width: 360px) {
    min-width: 32px;
    width: 32px;
    height: 17px;
  }
`;

const StyledInput = styled.input`
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 10;
  cursor: pointer;
`;

const StyledLabel = styled.label`
  ${({ theme }) => useFontSize(theme, "m", "l")}
  cursor: pointer;
  user-select: none;

  ${({ $hide }) =>
    $hide &&
    css`
      display: none;
    `}
`;

const StyledWheel = styled.div`
  width: 16px;
  height: 16px;
  background: #fff;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 2px;
  transform: translateY(-50%);
  transition: transform 0.2s ease-in-out;

  @media (max-width: 1024px) {
    width: ${useFluidSize({ min: 13.5, max: 16 })};
    height: ${useFluidSize({ min: 13.5, max: 16 })};
  }

  @media (max-width: 360px) {
    width: 13.5px;
    height: 13.5px;
  }
`;

const StyledBackground = styled.div`
  background: ${({ theme }) => theme.lightGray};
  border-radius: 10px;
  position: relative;
  width: 100%;
  height: 100%;
  transition: background 0.2s ease;

  ${StyledInput}:checked + & {
    background: ${({ theme }) => theme.primary};

    ${StyledWheel} {
      transform: translate(15px, -50%);
    }
  }
`;

const SlideControl = ({ name, label, hideLabel, link, ...props }) => (
  <StyledWrapper {...props}>
    <StyledInnerWrapper>
      <StyledInput name={name} id={name} type="checkbox" />
      <StyledBackground>
        <StyledWheel />
      </StyledBackground>
    </StyledInnerWrapper>
    <StyledLabel htmlFor={name} $hide={hideLabel}>
      {link ? extractLink(label, { link }) : label}
    </StyledLabel>
  </StyledWrapper>
);

SlideControl.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  hideLabel: PropTypes.bool,
  link: PropTypes.string,
};

SlideControl.defaultProps = {
  hideLabel: false,
  link: null,
};

export default SlideControl;
