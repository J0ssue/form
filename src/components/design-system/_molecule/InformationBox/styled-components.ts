import styled from "@emotion/styled";
import buildColor from "../../_static/colorPalette";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHead = styled.th`
  text-align: left;
  padding: 12px 8px;
  border-bottom: 2px solid ${buildColor("grey", "700")};
`;

export const TableData = styled.td`
  text-align: left;
  padding: 12px 8px;
  color: ${buildColor("grey", "700")};
  border-bottom: 1px solid ${buildColor("grey", "400")};
`;
