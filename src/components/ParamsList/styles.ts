import styled from "styled-components";
import { Color } from "ui";

const Wrapper = styled.ul`
  position: absolute;
  top: 10px;
  left: 10px;

  display: flex;

  height: 30px;
`;

const ParamItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 5px;
  padding: 8px;

  background-color: ${Color.GRAPHITE};
  border-radius: 10px;
`;

const Text = styled.span``;

export { Wrapper, ParamItem, Text };
