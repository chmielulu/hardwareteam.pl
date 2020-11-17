import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    color: ${({ theme }) => theme.black};
    font-family: 'Roboto', sans-serif;
  }
`;
