import styled from "@emotion/styled";
import buildColor from "components/design-system/_static/colorPalette";

export const MessageBoxContainer = styled.div<{ type: string }>`
  border-radius: 8px;
  padding: 8px;
  background-color: ${({ type }) =>
    type === "success" ? buildColor("green", "200") : buildColor("red", "200")};
`;
