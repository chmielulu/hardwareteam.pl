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
    max-width: 100vw;
    overflow-x: hidden;
    color: ${({ theme }) => theme.black};
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
  }

  .main-wrapper {
    min-width: 300px;
    min-height: 100%; 
    position: relative;
    padding-top: 135px;
    overflow-x: hidden;
    
    @media (max-width: 300px) {
      overflow-x: scroll;
    }

    @media (max-width: 1024px) {
      padding-top: 85px;
      padding-bottom: 55px;
    }

    @media (max-width: 768px) {
      padding-top: 55px;
    }
  }
`;
