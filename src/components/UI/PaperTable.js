import React from "react";
import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Typography,
  TableBody
} from "@material-ui/core";

const getHeaderContent = header => header.replace(/-/g, "");
const getHeaderAlign = header => {
  if (header.endsWith("--")) {
    return "right";
  }
  return "left";
};

const PaperTable = ({ title, children, headers = [], size = "small" }) => (
  <Paper>
    <Table size={size}>
      <TableHead>
        <TableRow>
          <TableCell colSpan={99}>
            <Typography variant="h5">{title}</Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          {headers.map((header, index) => (
            <TableCell key={index} align={getHeaderAlign(header)}>
              {getHeaderContent(header)}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>

      <TableBody>{children}</TableBody>
    </Table>
  </Paper>
);

export default PaperTable;
