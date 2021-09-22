import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const TextComp = styled.p<{
  color: string;
  size: number;
  align: string;
  transform: string;
  lineHeight?: number;
}>`
  ${({ color, size, transform, align, lineHeight }) => css`
    color: ${color};
    font-size: ${size}px;
    text-align: ${align};
    text-transform: ${transform};
    line-height: ${lineHeight || "normal"}px;
  `}
`;
