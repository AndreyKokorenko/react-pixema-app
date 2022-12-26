import { Input } from "componets";
import { Link } from "react-router-dom";
import { ROUTE } from "router";
import { Color } from "ui";
import { StyledHeader, Search, LogoIconHeader } from "./styles";

export const Header = () => {
  return (
    <StyledHeader>
      <Link to={ROUTE.HOME}>
        <LogoIconHeader fill={Color.DARK_THEME} />
      </Link>
      <Search>
        <Input placeholder="search" />
      </Search>
    </StyledHeader>
  );
};
