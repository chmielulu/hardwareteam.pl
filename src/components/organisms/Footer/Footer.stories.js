import React from "react";
import styled from "styled-components";
import { StoryRouter } from "storybook-react-router";
import Footer from "./Footer";
import dummyContent from "./dummyContent";

export default {
  title: "organisms/Footer",
  decorators: [
    (Story) => (
      <StoryRouter>
        <Story />
      </StoryRouter>
    ),
  ],
};

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: flex-end;
`;

export const withFooter = () => (
  <Wrapper>
    <Footer
      brands={dummyContent.brands}
      copyrightImages={dummyContent.copyrightImages}
    />
  </Wrapper>
);
