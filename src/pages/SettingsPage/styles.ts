import styled from "styled-components";
import { screen } from "ui";

const Container = styled.div`
  width: 80%;
  padding-inline: 40px;
  
  ${screen.MD} {
    padding: 0 30px;
  } ;
`;

export { Container };
