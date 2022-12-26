import styled from "styled-components";
import { Color, typography } from ".";

const Wrapper = styled.div`
  background: ${Color.DARK_THEME};
`;

const Text = styled.p`
  ${typography.H1}
`;

export { Wrapper, Text };
