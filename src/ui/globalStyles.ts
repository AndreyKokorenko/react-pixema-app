import { createGlobalStyle } from "styled-components";
import { ressetCSS } from "./ressetCSS";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`
${ressetCSS}
${theme}
`;
