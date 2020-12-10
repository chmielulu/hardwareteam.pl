import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Input, Select, Button } from "@components/atoms";
import { secondary } from "@constants/kinds";

const options = [
  { name: "Wszystko" },
  { name: "Komputery i laptopy" },
  { name: "Telefony i smartwatche" },
  { name: "Gaming i streaming" },
  { name: "Podzespoły komputerowe" },
  { name: "Urządzenia peryferyjne" },
  { name: "TV i audio" },
  { name: "Smarthome i lifestyle" },
  { name: "Akcesoria" },
];

const StyledWrapper = styled.div`
  display: flex;

  @media (max-width: 1024px) {
    border-radius: 10px;
    width: 90%;
  }
`;

const StyledInput = styled(Input)`
  width: 500px;

  input {
    border-radius: 10px 0 0 10px;
    border: 1px solid ${({ theme }) => theme.gray};
  }

  :hover input {
    border: 1px solid ${({ theme }) => theme.secondary};
  }
  @media (max-width: 1752px) {
    width: 300px;
  }

  @media (max-width: 1480px) {
    width: 250px;
  }

  @media (max-width: 1024px) {
    input {
      border-radius: 10px;
    }

    width: 100%;
  }
`;

const StyledSelect = styled(Select)`
  width: 200px;
  border-radius: 0;
  border-left: 0;
  border-right: 0;
  padding: 10px 20px;
  border-top: 1px solid ${({ theme }) => theme.gray};
  border-bottom: 1px solid ${({ theme }) => theme.gray};

  ul {
    z-index: 10;
    min-width: 100%;
    width: unset;
    white-space: nowrap;
    top: calc(100% + 1px);
  }

  @media (max-width: 1752px) {
    width: 150px;
  }

  @media (max-width: 1480px) {
    width: 100px;
    padding: 10px;
  }
`;

const StyledButton = styled(Button)`
  border-radius: 0 10px 10px 0;
  padding: 8px 20px;

  :focus {
    box-shadow: unset;
  }
`;

const Search = ({ innerSizes }) => {
  const name = "search";
  const label = "Czego szukasz?";

  return (
    <StyledWrapper>
      {innerSizes.width > 1024 ? (
        <>
          <StyledInput name={name} label={label} kind={secondary} />
          <StyledSelect options={options} kind={secondary} maxLength={16} />
          <StyledButton kind={secondary}>Szukaj</StyledButton>
        </>
      ) : (
        <StyledInput name={name} label={label} kind={secondary} />
      )}
    </StyledWrapper>
  );
};

Search.propTypes = {
  innerSizes: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }).isRequired,
};

export default Search;
