import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { useFontSize } from "@hooks/styled-components";
import { l } from "@constants/fontSizes";
import logo from "@assets/images/logo.png";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledText = styled.h1`
  ${({ theme }) => useFontSize(theme, l)}
  font-weight: 400;
  white-space: nowrap;
`;

const StyledImage = styled.img`
  width: 50px;
  height: auto;
  margin-right: 10px;

  ${({ size }) =>
    size &&
    css`
      width: ${size};
    `}

  ${({ withoutText }) =>
    withoutText &&
    css`
      margin-right: 0;
    `}
`;

const Logo = ({ size, withoutText, ...props }) => {
  return (
    <StyledWrapper {...props}>
      <StyledImage src={logo} size={size} withoutText={withoutText} />
      {!withoutText && <StyledText size={size}>Hardware Team</StyledText>}
    </StyledWrapper>
  );
};

Logo.propTypes = {
  size: PropTypes.string,
  withoutText: PropTypes.bool,
};

Logo.defaultProps = {
  size: null,
  withoutText: false,
};

export default Logo;
