import styled from "styled-components";
import { Color, screen, H3, H2 } from "ui";

const StyledList = styled.li`
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;

  ${screen.SM} {
    height: auto;
    padding: 30px;
  }
`;

const Error = styled(H3)`
  color: ${Color.ERROR};
`;

const Title = styled(H2)``;

const CategoryList = styled.ul`
  padding-inline: 40px;

  ${screen.SM} {
    padding-inline: 0px;
  }
`;

export { StyledList, Error, CategoryList, Title };
