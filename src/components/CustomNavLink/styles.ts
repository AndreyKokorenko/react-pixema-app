import { PathMatch, NavLink } from "react-router-dom";
import styled from "styled-components";
import { Color } from "ui";

const StyledNavLink = styled(NavLink)<{ $isActive: PathMatch<"*"> | null }>`
  top: 100px;
  left: 0;

  display: flex;
  align-items: center;

  font-weight: 600;
  font-size: 18px;

  text-decoration: none;
  color: ${({ $isActive }) => ($isActive ? `${Color.PRIMARY}` : `${Color.SECONDARY}`)};
  svg {
    margin-right: 20px;
    fill: ${({ $isActive }) => ($isActive ? `${Color.PRIMARY}` : `${Color.SECONDARY}`)};
  }
  :hover {
    transition: 0.2s;
    color: ${Color.PRIMARY};
  }
`;

export { StyledNavLink };
