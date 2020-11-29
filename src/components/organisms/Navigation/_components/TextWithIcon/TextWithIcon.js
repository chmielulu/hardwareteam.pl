import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { useFontSize } from "@hooks/styled-components";
import { Icon } from "@iconify/react";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledIcon = styled(Icon)`
  font-size: 3.5rem;
  margin-right: 10px;

  ${({ $tertiary }) =>
    $tertiary &&
    css`
      font-size: 2.5rem;
      margin-right: 20px;
    `}
`;

const StyledSecondIcon = styled(Icon)`
  font-size: 2.5rem;
  margin-right: 12px;

  @media (max-width: 1300px) {
    margin-right: 0;
  }
`;

const StyledText = styled.span`
  ${({ $tertiary, theme }) =>
    !$tertiary &&
    css`
      ${useFontSize(theme)};
      @media (max-width: 1300px) {
        display: none;
      }
    `}

  ${({ $secondary, tertiary }) =>
    !$secondary &&
    !tertiary &&
    css`
      @media (max-width: 1480px) {
        width: min-content;
      }
    `}

  ${({ $secondary }) =>
    $secondary &&
    css`
      @media (max-width: 1752px) {
        width: min-content;
      }
    `}

  ${({ $tertiary, theme }) =>
    $tertiary &&
    css`
      ${useFontSize(theme, "m", "l")};
    `}
`;

const TextWithIcon = ({ text, icon, secondary, tertiary, ...props }) => {
  const iReg = RegExp(" i ");

  const testText = (name) => {
    if (!iReg.test(name)) return name;

    const splittenName = name.split(" i ");
    const newName = `${splittenName[0]} i${String.fromCharCode(0x00a0)}${
      splittenName[1]
    }`;
    return newName;
  };

  return (
    <StyledWrapper {...props}>
      {icon &&
        (!secondary ? (
          <StyledIcon icon={icon} $tertiary={tertiary} />
        ) : (
          <StyledSecondIcon icon={icon} />
        ))}
      <StyledText $secondary={secondary} $tertiary={tertiary}>
        {testText(text)}
      </StyledText>
    </StyledWrapper>
  );
};

TextWithIcon.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.object,
  secondary: PropTypes.bool,
  tertiary: PropTypes.bool,
};

TextWithIcon.defaultProps = {
  secondary: null,
  tertiary: null,
  icon: null,
};

export default TextWithIcon;
