import React, { useState } from "react";
import styled from "styled-components";
import Window from "./Window";

export default {
  title: "molecules/Dialog/Window",
};

const Content = styled.div`
  height: 500px;
  font-size: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const withWindow = () => {
  const [isActive, setActive] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setActive(true)}>
        Click to open Window
      </button>
      <Window
        isActive={isActive}
        title="Hello world"
        onClose={() => setActive(false)}
      >
        <Content>Hello world</Content>
      </Window>
    </>
  );
};
