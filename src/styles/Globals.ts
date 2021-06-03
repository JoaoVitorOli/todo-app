import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Josefin Sans', sans-serif;
    background: ${(props) => props.theme.color.background};
    transition: 0.2s;
  }
`;
