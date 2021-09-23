import React from "react";
import { Entry } from "app/schemas/types";
import { Table, TableHead, TableData, Caption } from "./styled-components";

interface Props {
  /**
   * Adds entries
   * */
  entries?: Entry[];
  /**
   * Adds entries
   * */
  caption?: string;
}

const InformationBox = (props: Props) => {
  const { entries, caption } = props;

  const renderEntries = () =>
    entries &&
    entries.map((entry) => (
      <tr>
        <TableData>{entry.name}</TableData>
        <TableData>{entry.country}</TableData>
        <TableData>{entry.birthdate}</TableData>
      </tr>
    ));

  return (
    <Table>
      <tr>
        <TableHead>name</TableHead>
        <TableHead>country</TableHead>
        <TableHead>birthday</TableHead>
      </tr>
      {entries && renderEntries()}
      <Caption>{caption || ""}</Caption>
    </Table>
  );
};

export default InformationBox;
