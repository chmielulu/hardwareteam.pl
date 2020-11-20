import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
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
`;

const StyledText = styled.span`
  ${({ theme }) => useFontSize(theme)};
`;

const TextWithIcon = ({ text, icon, secondary, ...props }) => {
  return (
    <StyledWrapper {...props}>
      {!secondary ? (
        <StyledIcon icon={icon} />
      ) : (
        <StyledSecondIcon icon={icon} />
      )}
      <StyledText>{text}</StyledText>
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
