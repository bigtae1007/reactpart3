import React from "react";
import styled, { css } from "styled-components";

export default function Image({ children, ...restProps }) {
  return <StImage {...restProps} />;
}

const StImage = styled.div`
  ${({ size }) => {
    switch (size) {
      case "big":
        return big;
      case "middle":
        return middle;
      case "profile":
        return profile;
      default:
        break;
    }
  }};
`;

export const big = css``;
export const middle = css`
  border: 1px solid #000;
  width: 40%;
  height: 100%;
  max-width: 400px;
  min-width: 250px;
  border-radius: 10px;
  overflow: hidden;
`;
export const profile = css`
  border: 1px solid #000;
  width: 50px;
  min-width: 50px;
  height: 50px;
  border-radius: 50%;
`;
