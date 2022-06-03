import React from "react";
import styled, { css } from "styled-components";

export default function Text({ children, ...restProps }) {
  return <StText {...restProps}>{children}</StText>;
}

const StText = styled.div`
  ${({ font }) => {
    switch (font) {
      case "head01":
        return head01;
      case "head02":
        return head02;
      case "body":
        return body;
      default:
        break;
    }
  }}
  color: ${({ color }) => `var(--${color})`};
  word-break: break-all;
`;

export const head01 = css`
  font-size: 20px;
  font-weight: 700;
`;

export const head02 = css`
  font-size: 16px;
`;

export const body = css`
  font-size: 12px;
`;
