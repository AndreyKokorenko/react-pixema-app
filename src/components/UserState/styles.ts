import styled from "styled-components";
import { Color } from "ui";

const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 48px;
  width: 48px;
  margin-right: 0.3rem;

  font-size: 20px;
  line-height: 24px;

  background-color: ${Color.PRIMARY};
  color: ${Color.WHITE};
  border-radius: 10px;
`;

const User = styled.div`
  display: flex;
  align-items: center;

  overflow: hidden;
`;

const UserName = styled.div`
  display: flex;
`;

export { Avatar, User, UserName };
