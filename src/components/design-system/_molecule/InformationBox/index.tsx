import React from "react";
import { Entry } from "app/schemas/types";
import { Table, TableHead, TableData } from "./styled-components";

interface Props {
  /**
   * Adds entries
   * */
  entries?: Entry[];
}

const InformationBox = (props: Props) => {
  const { entries } = props;

  const renderEntries = () =>
    entries &&
    entries.map((entry) => (
      <tr key={entry.name}>
        <TableData>{entry.name}</TableData>
        <TableData>{entry.country}</TableData>
        <TableData>{entry.birthdate}</TableData>
      </tr>
    ));

  return (
    <Table>
      <thead>
        <tr>
          <TableHead>name</TableHead>
          <TableHead>country</TableHead>
          <TableHead>birthday</TableHead>
        </tr>
      </thead>
      <tbody>{entries && renderEntries()}</tbody>
    </Table>
  );
};

export default InformationBox;
