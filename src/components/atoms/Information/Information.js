import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Icon from "@iconify/react";
import { useFontSize } from "@hooks/styled-components";
import { Link } from "react-router-dom";
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

const StyledLink = styled(Link)`
  ${({ theme }) => useFontSize(theme, "s", "m")};
  text-decoration: none;
  color: ${({ theme }) => theme.gray};
  display: block;
  margin-top: 4px;

  :hover {
    text-decoration: underline;
  }
`;

const Information = ({ kind, to, value, ...props }) => {
  const { icon, text } = allKinds[kind];
  return (
    <StyledWrapper {...props}>
      <StyledIcon icon={icon} />
      <StyledText>
        {text}
        {value && <>{value}</>}
        {to && <StyledLink to={to}>Dowiedz się więcej</StyledLink>}
      </StyledText>
    </StyledWrapper>
  );
};

Information.propTypes = {
  kind: PropTypes.oneOf(kindNames).isRequired,
  to: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

Information.defaultProps = {
  to: null,
  value: null,
};

export default Information;
