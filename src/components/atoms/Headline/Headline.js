import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { useFontSize, useFluidSize } from "@hooks/styled-components";
import {
  allSizes,
  l as defaultSize,
  xl as defaultMobileFontSize,
} from "@constants/fontSizes";
import { allKinds, primary, secondary, tertiary } from "@constants/kinds";

const StyledHeadline = styled.h1`
  ${({ theme, $fontSize, $mobileFontSize }) =>
    useFontSize(theme, $fontSize, $mobileFontSize)};
  font-weight: 400;
  position: relative;
  padding: 0 0 20px 10px;

  ::before,
  ::after {
    content: "";
    display: block;
    position: absolute;
  }

  ${({ $kind, theme }) =>
    $kind === primary &&
    css`
      display: block;

      ::before {
        bottom: 0;
        width: 100%;
        left: 0;
        height: 1px;
        background: ${theme.lightGray};
      }
    `}

  @media (max-width: 1024px) {
    padding: 0 0 15px 5px;
  }

  ${({ $kind, theme }) =>
    $kind === secondary &&
    css`
      padding-left: 0;
      display: inline-flex;
      padding-top: 15px;
      font-weight: 300;

      ::before,
      ::after {
        top: 0;
        width: 25%;
        height: 2px;
      }

      ::before {
        left: 0;
        background: ${theme.gradient};
        border-radius: 2px 0 0 2px;
      }

      ::after {
        left: 25%;
        background: ${theme.lightGray};
        border-radius: 0 2px 2px 0;
      }

      @media (max-width: 1024px) {
        padding-top: ${useFluidSize({ min: 10, max: 15 })};
      }
    `}

  ${({ $kind }) =>
    $kind === tertiary &&
    css`
      padding: 0;
    }
  `}
`;

const Headline = ({ kind, fontSize, mobileFontSize, children, ...props }) => (
  <StyledHeadline
    $kind={kind}
    $fontSize={fontSize}
    $mobileFontSize={mobileFontSize}
    {...props}
  >
    {children}
  </StyledHeadline>
);

Headline.propTypes = {
  kind: PropTypes.oneOf(allKinds),
  fontSize: PropTypes.oneOf(allSizes),
  mobileFontSize: PropTypes.oneOf(allSizes),
  children: PropTypes.node.isRequired,
};

Headline.defaultProps = {
  kind: primary,
  fontSize: defaultSize,
  mobileFontSize: defaultMobileFontSize,
};

export default Headline;
