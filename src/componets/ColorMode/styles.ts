import styled from "styled-components";
import { Color } from "ui";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  padding: 10px 0 0 64px;
`;

const CustomLabel = styled.label`
  display: block;
  position: relative;

  width: 32px;
  height: 20px;

  background: ${Color.LIGHT};
  border-radius: 10px;
  cursor: pointer;

  :after {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;

    width: 16px;
    height: 16px;

    background: ${Color.WHITE};
    border-radius: 50%;
    transition: 0.3s;
  }
  :active:after {
    width: 20px;
  }
`;

const Check = styled.input`
  height: 0;
  width: 0;
  
  visibility: hidden;

  :checked + label {
    background: ${Color.PRIMARY};
  }

  :checked + label:after {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }
`;

export { Container, Check, CustomLabel };
