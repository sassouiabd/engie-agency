import React from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";

import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import {
  S_customTable,
  StyledTableCell,
  StyledTableRow,
} from "./custom-table.styles";

export default function CustomTable({ data }) {
  const S = S_customTable();

  const keys = Object.keys(data);
  const values = Object.values(data);

  return (
    <TableContainer component={Paper}>
      <Table className={S.table} aria-label='customized table'>
        <TableHead>
          <TableRow>
            {keys.map(key => (
              <StyledTableCell key={key}>{key}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          <StyledTableRow key={values.name}>
            {values.map(val => (
              <StyledTableCell key={val}>{val}</StyledTableCell>
            ))}
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
