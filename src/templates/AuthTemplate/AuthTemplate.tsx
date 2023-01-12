import { Link, Outlet } from "react-router-dom";
import { ROUTE } from "router";
import { LogoIcon } from "assets";
import { Container, StyledLink, CopyRight } from "./styles";
import { Color } from "ui";

export const AuthTemplate = () => {
  return (
    <Container>
      <StyledLink>
        <Link to={ROUTE.HOME}>
          <LogoIcon fill={`${Color.WHITE}`} />
        </Link>
      </StyledLink>
      <Outlet />
      <CopyRight>© All Rights Reserved</CopyRight>
    </Container>
  );
};
