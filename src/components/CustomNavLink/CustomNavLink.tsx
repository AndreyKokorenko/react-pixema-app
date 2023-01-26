import { ReactNode } from "react";
import { ROUTE } from "router";
import { StyledNavLink } from "./styles";
import { useMatch } from "react-router-dom";

interface IProps {
  children: ReactNode;
  to: ROUTE;
}

export const CustomNavLink = ({ children, to }: IProps) => {
  const match = useMatch(to);

  return (
    <StyledNavLink $isActive={match} to={to}>
      {children}
    </StyledNavLink>
  );
};
