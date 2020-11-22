import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    padding: 0;
    margin: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    color: ${({ theme }) => theme.black};
    margin: 0;
    width: 100vw;
    overflow-x: hidden;
    min-height: 100vh;
  }
`;
