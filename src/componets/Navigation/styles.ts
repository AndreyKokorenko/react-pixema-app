import styled from "styled-components";
import { Color, typography } from "../../ui";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Links = styled.nav`
  flex: 1 0 auto;
  display: grid;
  grid-template-rows: repeat(4, 24px);

  grid-row-gap: 40px;
  height: 100vh;
  padding: 64px 182px 0 62px;

  background: ${Color.WHITE_THEME};
`;

const LinkText = styled.span`
  ${typography.S4}

  padding-left: 20px;
`;

const Footer = styled.p`
  ${typography.S5}

  padding: 0 0 0 64px;
  
  color: ${Color.LIGHT};
`;

export { Links, LinkText, Container, Footer };
