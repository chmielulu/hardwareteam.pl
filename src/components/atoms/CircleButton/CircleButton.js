import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Icon from "@iconify/react";

const StyledWrapper = styled.button`
  border: 0;
  background: transparent;
  cursor: pointer;
  border-radius: 1000px;
  padding: 8px;
  outline: none;
  color: ${({ theme }) => theme.gray};
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    background: ${({ theme }) => theme.lighterGray};
    color: ${({ theme }) => theme.black};
  }

  :focus {
    background: ${({ theme }) => theme.lighterGray};
    color: ${({ theme }) => theme.black};
  }
`;

const StyledIcon = styled(Icon)`
  font-size: 2rem;
`;

const EditButton = ({ icon, label, ...props }) => {
  return (
    <StyledWrapper aria-labelledby={label} title={label} {...props}>
      <StyledIcon icon={icon} />
    </StyledWrapper>
  );
};

EditButton.propTypes = {
  icon: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
};

export default EditButton;
