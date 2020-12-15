import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Icon from "@iconify/react";
import { useFontSize, useFluidSize } from "@hooks/styled-components";

const StyledWrapper = styled.button`
  background: transparent;
  border: 0;
  display: inline-flex;
  align-items: center;
  margin: -10px 0;
  padding: 10px 0;
  margin-right: 25px;
  cursor: pointer;

  @media (max-width: 1024px) {
    margin: 0 25px 0 0;
    padding: 15px 0;
  }

  :last-of-type {
    margin-right: 0;
  }
`;

const StyledIcon = styled(Icon)`
  font-size: 2rem;
  margin-right: 10px;

  @media (max-width: 1024px) {
    font-size: ${useFluidSize({ min: 1.5, max: 2, unit: "rem" })};
  }

  @media (max-width: 350px) {
    display: none;
  }
`;

const StyledText = styled.span`
  ${({ theme }) => useFontSize(theme, "m", "l")}
`;

const IconTextButton = ({ icon, children, ...props }) => {
  return (
    <StyledWrapper {...props}>
      <StyledIcon icon={icon} />
      <StyledText>{children}</StyledText>
    </StyledWrapper>
  );
};

IconTextButton.propTypes = {
  icon: PropTypes.any.isRequired,
  children: PropTypes.string.isRequired,
};

export default IconTextButton;
