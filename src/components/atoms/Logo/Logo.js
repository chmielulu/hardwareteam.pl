import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useFontSize } from "@hooks/styled-components";
import { l, allSizes } from "@constants/fontSizes";
import logo from "@assets/images/logo.png";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledText = styled.h1`
  ${({ theme, size }) => useFontSize(theme, size)}
  font-weight: 400;
`;

const StyledImage = styled.img`
  width: 50px;
  height: auto;
  margin-right: 10px;
`;

const Logo = ({ size }) => {
  return (
    <StyledWrapper>
      <StyledImage src={logo} />
      <StyledText size={size}>Hardware Team</StyledText>
    </StyledWrapper>
  );
};

Logo.propTypes = {
  size: PropTypes.oneOf(allSizes),
};

Logo.defaultProps = {
  size: l,
};

export default Logo;
