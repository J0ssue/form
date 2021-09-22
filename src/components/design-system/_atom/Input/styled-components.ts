import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { buildColor } from "components/design-system/_static/colorPalette";

export const InputContainer = styled.div`
  width: 309px;
  height: 48px;
  position: relative;

  & * {
    box-sizing: border-box;
  }
`;

export const InputComponent = styled.input<{ hasError: undefined | string }>`
  width: 100%;
  height: 100%;
  padding: 0 14px 0 14px;
  border-radius: 8px;
  border: 1.5px solid #cfcfcf;
  caret-color: ${buildColor("red", "100")};
  font-size: 14px;
  outline: none;
  transition: border 0.2s, outline 0.2s;

  &:focus {
    border: 1px solid ${buildColor("red", "100")};
  }

  ${({ hasError }) =>
    hasError &&
    css`
      border: 1.5px solid ${buildColor("red", "100")};
      &:focus {
        border: 1.5px solid ${buildColor("red", "100")};
      }
    `}
`;

export const InputTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: -19px;
  left: 0px;
`;

export const InputLabel = styled.span<{ hasError: Function }>`
  font-size: 12px;
  color: ${({ hasError }) =>
    hasError() ? buildColor("red", "100") : buildColor("black", "900")};
`;

export const InputError = styled.span`
  text-align: right;
  font-size: 12px;
  color: ${buildColor("red", "100")};
`;
