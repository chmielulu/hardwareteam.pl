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
    position: fixed;
    height: 100%;
    overflow: hidden;
  }

  body {
    color: ${({ theme }) => theme.black};
    width: 100vw;
    height: 100vh;
    min-width: 300px;
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
    overflow-x: hidden;
    overflow-y: auto;
  }
`;
