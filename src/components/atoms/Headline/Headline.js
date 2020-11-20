import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { useFontSize } from "@hooks/styled-components";
import { allSizes, l as defaultSize } from "@constants/fontSizes";
import { allKinds, primary, secondary, tertiary } from "@constants/kinds";

const StyledHeadline = styled.h1`
  ${({ theme, fontSize }) => useFontSize(theme, fontSize)};
  font-weight: 400;
  position: relative;
  padding: 20px 0 20px 10px;

  ::before,
  ::after {
    content: "";
    display: block;
    position: absolute;
  }

  ${({ kind, theme }) =>
    kind === primary &&
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

  ${({ kind, theme }) =>
    kind === secondary &&
    css`
      padding-left: 0;
      display: inline;

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
    `}

  ${({ kind }) =>
    kind === tertiary &&
    css`
      padding: 0;
    }
  `}
`;

StyledHeadline.propTypes = {
  kind: PropTypes.oneOf(allKinds),
  fontSize: PropTypes.oneOf(allSizes),
};

StyledHeadline.defaultProps = {
  kind: primary,
  fontSize: defaultSize,
};

export default StyledHeadline;
