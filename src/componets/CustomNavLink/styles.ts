import { NavLink, PathMatch } from "react-router-dom";
import styled from "styled-components";
import { Color } from "../../ui";

const StyledNavLink = styled(NavLink)<{ $isActive: PathMatch<"*"> | null }>`
  display: flex;
  align-items: center;
  top: 100px;
  left: 0;

  text-decoration: none;
  color: ${({ $isActive }) => ($isActive ? `${Color.PRIMARY}` : `${Color.SECONDARY}`)};
  svg {
    fill: ${({ $isActive }) => ($isActive ? `${Color.PRIMARY}` : `${Color.SECONDARY}`)};
  }
  :hover {
    transition: 0.2s;
    color: ${Color.PRIMARY};
  }
`;

export { StyledNavLink };
