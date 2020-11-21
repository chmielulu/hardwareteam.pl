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
`;

const StyledSecondIcon = styled(Icon)`
  font-size: 2.5rem;
  margin-right: 12px;

  @media (max-width: 1300px) {
    margin-right: 0;
  }
`;

const StyledText = styled.span`
  ${({ theme }) => useFontSize(theme)};

  ${({ secondary }) =>
    secondary &&
    css`
      @media (max-width: 1752px) {
        width: min-content;
      }
    `}

  ${({ secondary }) =>
    !secondary &&
    css`
      @media (max-width: 1480px) {
        width: min-content;
      }
    `}
  
  @media (max-width: 1300px) {
    display: none;
  }
`;

const TextWithIcon = ({ text, icon, secondary, ...props }) => {
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
      {!secondary ? (
        <StyledIcon icon={icon} />
      ) : (
        <StyledSecondIcon icon={icon} />
      )}
      <StyledText secondary={secondary}>{testText(text)}</StyledText>
    </StyledWrapper>
  );
};

TextWithIcon.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  secondary: PropTypes.bool,
};

TextWithIcon.defaultProps = {
  secondary: null,
};

export default TextWithIcon;
