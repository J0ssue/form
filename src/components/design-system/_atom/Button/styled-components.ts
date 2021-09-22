import styled from "@emotion/styled";
import { css } from "@emotion/react";
//@ts-ignore
import { buildColor } from "components/design-system/_static/colorPalette";

export const ButtonContainer = styled.button<{ buttonType: string }>`
  display: flex;
  align-items: center;
  border: none;
  font-size: 13px;
  text-transform: uppercase;
  justify-content: center;
  letter-spacing: 1px;
  transition: background-color 0.2s, color 0.2s;
  cursor: pointer;
  background-color: transparent;

  ${({ buttonType }) =>
    buttonType === "primary" &&
    css`
      color: ${buildColor("white", "900")};
      background-color: ${buildColor("red", "100")};
      &:hover {
        background-color: ${buildColor("red", "000")};
      }
    `}

  ${({ buttonType }) =>
    buttonType === "secondary" &&
    css`
      color: ${buildColor("black", "900")};
      border: 2px solid ${buildColor("black", "900")};
      background-color: ${buildColor("white", "900")};
      &:hover {
        color: ${buildColor("white", "900")};
        background-color: ${buildColor("black", "900")};
      }
    `}

  ${({ buttonType }) =>
    buttonType !== "clear"
      ? css`
          width: 160px;
          height: 48px;
        `
      : css`
          &:hover {
            color: ${buildColor("red", "100")};
          }
        `}

  svg {
    margin-left: 13px;
  }
`;
