import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledProgress = styled.div`
  width: 200px;
  height: 18px;
  background: ${({ theme }) => theme.lightGray};
  border-radius: 10px;
  overflow: hidden;
  position: relative;

  ::before {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    content: "";
    background: ${({ theme }) => theme.gradient};
    transform-origin: top left;
    transform: ${({ $valuenow }) => `scaleX(${$valuenow})`};
  }
`;

const Progress = ({ min, max, value, className }) => {
  const valuenow = (value - min) / (max - min);

  return (
    <StyledProgress
      $valuenow={valuenow}
      className={className}
      role="progressbar"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow={valuenow}
      aria-valuetext={value}
    />
  );
};

Progress.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  className: PropTypes.string,
};

Progress.defaultProps = {
  className: undefined,
};

export default Progress;
