import styled from "@emotion/styled";
import buildColor from "components/design-system/_static/colorPalette";

export const InputContainer = styled.div`
  width: 309px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-items: space-between;
  color: ${buildColor("blue", "400")};
  font-size: 14px;
  display: flex;
  position: relative;

  & * {
    box-sizing: border-box;
  }
`;

export const Select = styled.select`
  width: 100%;
  height: 100%;
  color: ${buildColor("blue", "400")};
  border: 2px solid ${buildColor("blue", "400")};
  caret-color: ${buildColor("blue", "400")};
  font-size: 14px;
  outline: none;
  padding-left: 14px;
  transition: border 0.2s, outline 0.2s;
  -moz-appearance: none; /* Firefox */
  -webkit-appearance: none; /* Safari and Chrome */
  appearance: none;
`;

export const SelectButton = styled.div`
  height: 100%;
  width: 48px;
  cursor: pointer;
  color: ${buildColor("blue", "400")};
  border: 2px solid ${buildColor("blue", "400")};
  background-color: ${buildColor("grey", "400")};
  pointer-events: none;
  position: absolute;
  right: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
