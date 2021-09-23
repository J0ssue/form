import styled from "@emotion/styled";
import buildColor from "../../_static/colorPalette";

export const Table = styled.table`
  width: 100%;
  height: 100%;
  border: 2px solid ${buildColor("blue", "400")};
  border-collapse: collapse;
`;

export const TableHead = styled.th`
  text-align: left;
  padding: 12px 8px;
  border-bottom: 2px solid ${buildColor("grey", "400")};
`;

export const TableData = styled.td`
  text-align: left;
  padding: 12px 8px;
  color: ${buildColor("grey", "400")};
  border-bottom: 1px solid ${buildColor("grey", "400")};
`;

export const Caption = styled.caption`
  text-align: right;
  color: ${buildColor("blue", "400")};
  caption-side: bottom;
  margin-top: 10px;
`;
