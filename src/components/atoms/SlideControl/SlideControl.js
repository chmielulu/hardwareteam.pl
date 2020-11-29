import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledWrapper = styled.div`
  width: 35px;
  height: 20px;
  position: relative;
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

const StyledHideLabel = styled.label`
  display: none;
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

const SlideControl = ({ name, id, label }) => (
  <StyledWrapper>
    <StyledHideLabel htmlFor={id}>{label}</StyledHideLabel>
    <StyledInput name={name} id={id} type="checkbox" />
    <StyledBackground>
      <StyledWheel />
    </StyledBackground>
  </StyledWrapper>
);

SlideControl.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default SlideControl;
