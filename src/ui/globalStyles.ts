import { createGlobalStyle } from "styled-components";
import { ressetCSS } from "./ressetCSS";
import { darkTheme, lightTheme } from "./theme";

export const GlobalStyles = createGlobalStyle`
${ressetCSS}
${lightTheme}
${darkTheme}
`;
