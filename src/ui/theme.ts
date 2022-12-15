import { css } from "styled-components";

export const darkTheme = css`
  html[theme="light"] {
    --white: #fff;
    --dark: #242426;
  }
`;

export const lightTheme = css`
  html[theme="dark"] {
    --white: #242426;
    --dark: #fff;
  }
`;


