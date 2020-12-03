import React, { useState } from "react";
import styled from "styled-components";
import NotLoggedIn from "./NotLoggedIn";

export default {
  title: "molecules/Dialog/NotLoggedIn",
};

const Content = styled.div`
  height: 500px;
  font-size: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const withNotLoggedIn = () => {
  const [isActive, setActive] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setActive(true)}>
        Click to open NotLoggedIn
      </button>
      <NotLoggedIn
        isActive={isActive}
        title="Hello world"
        onClose={() => setActive(false)}
      >
        <Content>Hello world</Content>
      </NotLoggedIn>
    </>
  );
};
