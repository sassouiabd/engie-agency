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
import { useSelector } from "react-redux";
import { selectChoice } from "../../redux/user/user.selectors";

export default function CustomTable() {
  const S = S_customTable();

  const choice = useSelector(selectChoice);

  return choice ? (
    <TableContainer component={Paper}>
      <Table className={S.table} aria-label='customized table'>
        <TableHead>
          <TableRow>
            {Object.keys(choice).map(key =>
              key === "_id" ? null : (
                <StyledTableCell key={key}>{key}</StyledTableCell>
              )
            )}
          </TableRow>
        </TableHead>

        <TableBody>
          <StyledTableRow>
            {Object.entries(choice).map(([key, val]) =>
              key === "_id" ? null : (
                <StyledTableCell key={val}>{val}</StyledTableCell>
              )
            )}
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  ) : null;
}
