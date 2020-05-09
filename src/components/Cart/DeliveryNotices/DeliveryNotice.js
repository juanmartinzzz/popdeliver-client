import React from "react";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  Toolbar,
  TableHead,
} from "@material-ui/core";
import { Moto } from "../components";
import { currency } from "../../../services/formatter/formatter";

const Row = ({ location, minimumPrice, maximumPrice }) => (
  <TableRow>
    <TableCell>
      <Typography variant="body2">{location}</Typography>
    </TableCell>
    <TableCell align="right">
      <Typography variant="body2">
        {`${currency(minimumPrice)} a ${currency(maximumPrice)}`}
      </Typography>
    </TableCell>
  </TableRow>
);

const DeliveryNotice = () => (
  <Table size="small">
    <TableHead>
      <TableRow>
        <TableCell colSpan={99}>
          <Toolbar>
            <Moto />
            <Typography variant="caption">
              Te cobrarán tu domicilio al momento de la entrega. El costo
              depende de tu ubicación.
            </Typography>
          </Toolbar>
        </TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <Row location="Bucaramanga" minimumPrice={4000} maximumPrice={6000} />
      <Row location="Floridablanca" minimumPrice={6000} maximumPrice={8000} />
      <Row location="Girón" minimumPrice={8000} maximumPrice={9000} />
      <Row location="Piedecuesta" minimumPrice={9000} maximumPrice={16000} />
    </TableBody>
  </Table>
);

export default DeliveryNotice;
