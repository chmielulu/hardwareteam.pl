import React from "react";
import styled from "styled-components";
import { Input, Select, Button } from "@components/atoms";
import { secondary } from "@constants/kinds";

const options = [
  "Wszystko",
  "Komputery i laptopy",
  "Telefony i smartwatche",
  "Gaming i streaming",
  "Podzespoły komputerowe",
  "Urządzenia peryferyjne",
  "TV i audio",
  "Smarthome i lifestyle",
  "Akcesoria",
];

const StyledWrapper = styled.div`
  display: flex;
`;

const StyledInput = styled(Input)`
  width: 500px;
  border-radius: 10px 0 0 10px;
  border: 1px solid ${({ theme }) => theme.gray};

  :hover {
    border: 1px solid ${({ theme }) => theme.secondary};
  }

  @media (max-width: 1752px) {
    width: 300px;
  }

  @media (max-width: 1480px) {
    width: 250px;
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
  }

  @media (max-width: 1752px) {
    width: 150px;
  }

  @media (max-width: 1480px) {
    width: 100px;
  }
`;

const StyledButton = styled(Button)`
  border-radius: 0 10px 10px 0;
  padding: 8px 20px;

  :focus {
    box-shadow: unset;
  }
`;

const Search = () => {
  return (
    <StyledWrapper>
      <StyledInput name="search" label="Czego szukasz?" kind={secondary} />
      <StyledSelect
        name="categories"
        options={options}
        kind={secondary}
        maxLength={16}
      />
      <StyledButton kind={secondary}>Szukaj</StyledButton>
    </StyledWrapper>
  );
};

export default Search;
