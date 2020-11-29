import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Icon from "@iconify/react";
import { useFontSize } from "@hooks/styled-components";
import allKinds, { kinds as kindNames } from "./kinds";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledIcon = styled(Icon)`
  font-size: 2.5rem;
  margin-right: 10px;

  @media (max-width: 1024px) {
    font-size: 2rem;
  }
`;

const StyledText = styled.span`
  ${({ theme }) => useFontSize(theme, "m", "l")};
  font-weight: 300;
`;

const Information = ({ kind, ...props }) => {
  const { icon, text } = allKinds[kind];
  return (
    <StyledWrapper {...props}>
      <StyledIcon icon={icon} />
      <StyledText>{text}</StyledText>
    </StyledWrapper>
  );
};

Information.propTypes = {
  kind: PropTypes.oneOf(kindNames),
};

Information.defaultProps = {
  kind: kindNames[0],
};

export default Information;
