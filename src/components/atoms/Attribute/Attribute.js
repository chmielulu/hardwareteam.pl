import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useFontSize } from "@hooks/styled-components";

const StyledWrapper = styled.div`
  ${({ theme }) => useFontSize(theme)};
  display: flex;
  align-items: center;
`;

const StyledName = styled.span`
  font-weight: 300;
  margin-right: 5px;
`;

const StyledValue = styled.span``;

const Attribute = ({ name, value, ...props }) => {
  return (
    <StyledWrapper {...props}>
      <StyledName>{name}:</StyledName>
      <StyledValue>{value}</StyledValue>
    </StyledWrapper>
  );
};

Attribute.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Attribute;
