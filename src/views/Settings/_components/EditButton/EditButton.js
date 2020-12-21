import React from "react";
import styled from "styled-components";
import Icon from "@iconify/react";
import pencilIcon from "@iconify/icons-clarity/pencil-line";

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

const EditButton = ({ ...props }) => {
  return (
    <StyledWrapper aria-labelledby="Edytuj" title="Edytuj" {...props}>
      <StyledIcon icon={pencilIcon} />
    </StyledWrapper>
  );
};

export default EditButton;
