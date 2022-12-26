import { css } from "styled-components";

export const darkTheme = css`
  html[theme="light"] {
    --white: #fff;
    --dark: #242426;
    --light: #fff;
    --secondary: #afb2b6;
    --grey: #fff;
  }
`;

export const lightTheme = css`
  html[theme="dark"] {
    --white: #000;
    --dark: #fff;
    --light: #323537;
    --secondary: #323537;
    --grey: #242426;
  }
`;
