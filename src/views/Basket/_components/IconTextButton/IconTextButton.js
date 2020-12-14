import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Icon from "@iconify/react";
import { useFontSize } from "@hooks/styled-components";

const StyledWrapper = styled.button`
  background: transparent;
  border: 0;
  display: inline-flex;
  align-items: center;
  margin: -10px 0;
  padding: 10px 0;
  margin-left: 25px;
  cursor: pointer;

  :first-of-type {
    margin-left: 0;
  }
`;

const StyledIcon = styled(Icon)`
  font-size: 2rem;
  margin-right: 10px;
`;

const StyledText = styled.span`
  ${({ theme }) => useFontSize(theme)}
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
