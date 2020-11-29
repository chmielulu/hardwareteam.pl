import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Icon from "@iconify/react";
import arrowIcon from "@iconify/icons-clarity/circle-arrow-line";
import { useFontSize } from "@hooks/styled-components";

const StyledLink = styled(Link)`
  ${({ theme }) => useFontSize(theme)}
  color: inherit;
  text-decoration: none;
  display: flex;
  align-items: center;

  :hover {
    text-decoration: underline;
  }
`;

const StyledIcon = styled(Icon)`
  font-size: 2rem;
  margin-right: 8px;
  transform: rotate(-90deg) !important;
`;

const BackButton = ({ to, children }) => (
  <StyledLink to={to}>
    <StyledIcon icon={arrowIcon} />
    {children}
  </StyledLink>
);

BackButton.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default BackButton;
