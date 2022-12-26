import { Link, Outlet } from "react-router-dom";
import { ROUTE } from "../../router";
import { LogoIcon } from "../../assets";
import { Container, StyledLink, Footer } from "./styles";
import { useTheme } from "hooks";

export const AuthTemplate = () => {
  useTheme();
  return (
    <Container>
      <StyledLink>
        <Link to={ROUTE.HOME}>
          <LogoIcon />
        </Link>
      </StyledLink>
      <Outlet />
      <Footer>© All Rights Reserved</Footer>
    </Container>
  );
};
