import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { useFluidSize, useFontSize } from "@hooks/styled-components";
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

  ${({ $toSmall }) =>
    $toSmall &&
    css`
      @media (max-width: 1024px) {
        width: ${useFluidSize({ min: 34, max: 50 })};
        margin-right: ${useFluidSize({ min: 5, max: 10 })};
      }

      @media (max-width: 360px) {
        width: 34px;
        margin-right: 5px;
      }
    `}
`;

const Logo = ({ size, withoutText, toSmall, ...props }) => {
  return (
    <StyledWrapper {...props}>
      <StyledImage
        src={logo}
        size={size}
        withoutText={withoutText}
        $toSmall={toSmall}
      />
      {!withoutText && <StyledText size={size}>Hardware Team</StyledText>}
    </StyledWrapper>
  );
};

Logo.propTypes = {
  size: PropTypes.string,
  withoutText: PropTypes.bool,
  toSmall: PropTypes.bool,
};

Logo.defaultProps = {
  size: null,
  withoutText: false,
  toSmall: false,
};

export default Logo;
