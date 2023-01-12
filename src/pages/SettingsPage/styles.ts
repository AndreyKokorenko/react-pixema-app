import styled from "styled-components";
import { Color, screen, H2 } from "ui";

const Setting = styled.div`
  margin-bottom: 40px;
`;

const Name = styled(H2)``;

const Wrapper = styled.div`
  position: relative;

  width: 100%;
  padding: 24px 40px;

  background-color: ${Color.GRAPHITE};
  border-radius: 10px;
`;

const EditButton = styled.div`
  position: absolute;
  right: 40px;
  top: 20px;
  
  cursor: pointer;
`;

const Container = styled.div`
  width: 80%;
  padding-inline: 40px;

  ${screen.MD} {
    padding: 0 30px;
  } ;
`;

const ProfileText = styled.p`
  padding-block: 16px;
`;

const Subtitle = styled.span`
  margin-right: 20px;
`;

export { Setting, Name, Wrapper, Container, EditButton, ProfileText, Subtitle };
