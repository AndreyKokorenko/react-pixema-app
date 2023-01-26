import styled from "styled-components";
import { Color, S4, S5 } from "ui";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Links = styled.nav`
  display: grid;
  flex: 1 0 auto;

  grid-template-rows: repeat(4, 24px);
  grid-row-gap: 40px;
  padding: 0 0 0 60px;
`;

const LinkText = styled.span`
  ${S4}

  padding-left: 20px;
`;

const CopyRight = styled.p`
  ${S5}

  padding: 200px 40px 0 0;
  
  color: ${Color.LIGHT};
`;

export { Links, LinkText, Container, CopyRight };
