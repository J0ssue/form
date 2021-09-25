import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { buildColor } from "components/design-system/_static/colorPalette";

export const InputContainer = styled.div`
  width: 309px;
  height: 48px;
  position: relative;
  display: flex;
  align-items: center;
  justify-items: space-between;
  flex-wrap: wrap;

  & * {
    box-sizing: border-box;
  }
`;

export const InputComponent = styled.input<{ hasError: boolean }>`
  width: 100%;
  height: 100%;
  padding: 0 14px 0 14px;
  color: ${buildColor("blue", "400")};
  border: 2px solid ${buildColor("blue", "400")};
  caret-color: ${buildColor("blue", "400")};
  font-size: 14px;
  outline: none;
  transition: border 0.2s, outline 0.2s;

  &::placeholder {
    color: ${buildColor("blue", "400")};
  }

  &:focus {
    border: 2px solid ${buildColor("blue", "400")};
  }

  ${({ hasError }) =>
    hasError &&
    css`
      border: 2px solid ${buildColor("red", "100")};
      &:focus {
        border: 2px solid ${buildColor("red", "100")};
      }
    `}
`;

export const InputLabel = styled.label<{ hasError: boolean }>`
  font-size: 14px;
  text-transform: capitalize;
  color: ${({ hasError }) =>
    hasError ? buildColor("red", "100") : buildColor("blue", "400")};
`;
