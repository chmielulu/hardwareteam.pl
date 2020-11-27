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
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
    overflow-x: hidden;
    overflow-y: auto;
    padding-top: 135px;

    @media (max-width: 1024px) {
      padding-top: 85px;
      padding-bottom: 55px;
    }

    @media (max-width: 768px) {
      padding-top: 55px;
    }
    
    @media (max-width: 300px) {
      overflow-x: scroll;
    }
  }

  #root {
    width: 100vw;
    min-width: 300px;
    height: 100%; 
    overflow-y: scroll;
  }
`;
