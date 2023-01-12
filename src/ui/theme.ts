import { css } from "styled-components";

export type Theme = "dark" | "light";

export const theme = css`
  html[data-theme="dark"] {
    --primary: #7b61ff;
    --primary_light: #917cff;
    --secondary: #80858b;
    --background_primary: #000000;
    --background_primary_dark: #242426;
    --background_graphite: #323537;
    --error: #ff5154;
    --text_primary: #ffffff;
    --light: #afb2b6;
  }

  html[data-theme="light"] {
    --primary: #7b61ff;
    --primary_light: #917cff;
    --secondary: #333333;
    --background_primary: #dedede;
    --background_primary_dark: #afb2b6;
    --background_graphite: #9c9c9c;
    --error: #ff5154;
    --text_primary: #000000;
    --light: #afb2b6;
  }
`;
