/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import { useFontSize } from "@hooks/styled-components";
import awardKinds, { kinds } from "./kinds";

const StyledWrapper = styled.div`
  color: ${({ $color }) => $color};
  display: flex;
  align-items: center;
`;

const StyledIcon = styled(Icon)`
  font-size: 2.4rem;
  margin-right: 10px;
`;

const StyledText = styled.p`
  ${({ theme }) => useFontSize(theme)}
  font-weight: 300;
  margin: 0;
`;

const Award = ({ kind, ...props }) => {
  const { icon, color, text } = awardKinds[kind];

  return (
    <StyledWrapper $color={color} {...props}>
      <StyledIcon icon={icon} />
      <StyledText>{text}</StyledText>
    </StyledWrapper>
  );
};

Award.propTypes = {
  kind: PropTypes.oneOf(kinds).isRequired,
};

export default Award;
