import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import Icon from "@iconify/react";
import arrowIcon from "@iconify/icons-clarity/arrow-line";

const StyledButton = styled.button`
  border-radius: 50%;
  border: none;
  outline: none;
  cursor: pointer;
  background: #fff;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.25);

  :hover {
    background: ${({ theme }) => theme.lighterGray};
  }
`;

const StyledIcon = styled(Icon)`
  font-size: 2.5rem;
  ${({ $rotate }) => css`
    transform: ${`rotate(${$rotate}deg)!important`};
  `}
`;

const ArrowButton = ({ rotate, ...props }) => {
  return (
    <StyledButton {...props}>
      <StyledIcon icon={arrowIcon} $rotate={rotate} />
    </StyledButton>
  );
};

ArrowButton.propTypes = {
  rotate: PropTypes.number,
};

ArrowButton.defaultProps = {
  rotate: 90,
};

export default ArrowButton;
