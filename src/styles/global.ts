import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, border-style, #root {
    height: 100vh;
  }

  body {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antiliased;
    background: #181818;
    font-family: 'Montserrat', sans-serif;
    color: #fff;
  }
`;
