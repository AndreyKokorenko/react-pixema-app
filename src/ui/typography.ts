import styled, { css } from "styled-components";
import { Media } from "./breakpoints";
import { Color } from "./colors";

export const H1 = styled.h1`
  font-weight: 600;
  font-size: 40px;
  line-height: 60px;
  color: ${Color.GRAPHITE};
  ${Media.XS} {
    font-size: 28px;
  }
  ${Media.MD} {
    font-size: 32px;
  }
  ${Media.LG} {
    font-size: 40px;
  }
`;

export const H2 = styled.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: ${Color.GRAPHITE};
  ${Media.XS} {
    font-size: 20px;
  }
  ${Media.LG} {
    font-size: 24px;
  }
`;

export const H3 = styled.h3`
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  color: ${Color.GRAPHITE};
  ${Media.XS} {
    font-size: 18px;
  }
  ${Media.LG} {
    font-size: 20px;
  }
`;

export const H4 = styled.h4`
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: ${Color.GRAPHITE};
`;

export const S4 = css`
  font-weight: 600;
  font-size: 18px;
  line-height: 1.33;
`;
export const S5 = css`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
`;

export const Subtitle = styled.p`
  color: ${Color.SECONDARY};
`;
