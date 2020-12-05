import React from "react";
import styled from "styled-components";
import LinksRow from "./LinksRow/LinksRow";
import ContactRow from "./ContactRow/ContactRow";
import dummyContent from "./dummyContent";

const StyledWrapper = styled.div`
  display: flex;
  max-width: 1200px;
  width: 80%;
  justify-content: space-between;

  @media (max-width: 1024px) {
    flex-direction: column;
    width: 100%;
  }
`;

const Navigation = () => {
  return (
    <StyledWrapper>
      {dummyContent.rows.map(({ title, items }, index) => (
        <LinksRow title={title} items={items} key={index} />
      ))}
      <ContactRow />
    </StyledWrapper>
  );
};

export default Navigation;
