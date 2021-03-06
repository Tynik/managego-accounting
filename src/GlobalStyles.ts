import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  a,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    all: unset;
  }
`;

export default GlobalStyles;
