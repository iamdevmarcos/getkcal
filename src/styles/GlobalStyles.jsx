import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  html,
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }

  body {
    background: #282828;
    font-family: 'Montserrat', sans-serif;
    color: white;
  }
`;
