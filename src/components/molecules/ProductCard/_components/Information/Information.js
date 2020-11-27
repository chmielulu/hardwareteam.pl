import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Icon from "@iconify/react";
import clockIcon from "@iconify/icons-clarity/clock-line";
import { useFontSize } from "@hooks/styled-components";
import truckIcon from "@iconify/icons-clarity/truck-line";

const kindNames = ["time", "delivery"];
const allKinds = {
  [kindNames[0]]: {
    icon: clockIcon,
    text: "U ciebie już jutro",
  },
  [kindNames[1]]: {
    icon: truckIcon,
    text: "Dostawa gratis",
  },
};

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
