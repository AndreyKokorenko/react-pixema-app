import styled from "styled-components";
import { Color, Media, typography } from "../../ui";
import { authBackground } from "assets";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 40px;

  background: black;
  background-image: url(${authBackground});
  background-repeat: no-repeat;
  background-size: cover;
`;

const StyledLink = styled.div``;

const Footer = styled.p`
  ${typography.B1}
  color: ${Color.WHITE};

  ${Media.XS} {
    padding-bottom: 48px;
  }
  ${Media.MD} {
    padding-bottom: 56px;
  }
  ${Media.LG} {
    padding-bottom: 64px;
  }
`;

export { Container, Footer, StyledLink };
