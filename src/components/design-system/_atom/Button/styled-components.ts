import styled from "@emotion/styled";
import { css } from "@emotion/react";
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
    buttonType === "clear" &&
    css`
      color: ${buildColor("blue", "400")};
      border: 2px solid ${buildColor("blue", "400")};
      width: 160px;
      height: 48px;
      &:hover {
        color: ${buildColor("white", "900")};
        background-color: ${buildColor("blue", "400")};
      }
    `}
`;
