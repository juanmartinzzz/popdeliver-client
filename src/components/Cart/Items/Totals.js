import React from "react";
import { DialogPaper } from "../../UI/FullscreenDialog/components";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography
} from "@material-ui/core";
import { currency } from "../../../services/formatter/formatter";
import {
  getTotalCost,
  getTotalPoints
} from "../../../services/calculations/cart";
import { getPoints } from "../../../services/calculations/email";

const Totals = ({ email, storeAndActions }) => (
  <DialogPaper>
    <Table size="small">
      <TableBody>
        <TableRow hover>
          <TableCell>
            <Typography variant="h6">Total pedido</Typography>
          </TableCell>

          <TableCell align="right">
            <Typography variant="h6" color="secondary">
              {currency(getTotalCost(storeAndActions.store.cart.items))}
            </Typography>
          </TableCell>
        </TableRow>

        <TableRow hover>
          <TableCell>
            <Typography variant="h6">Millas acumuladas</Typography>
          </TableCell>

          <TableCell align="right">
            <Typography variant="h6" color="secondary">
              {getTotalPoints(storeAndActions.store.cart.items) +
                (email && getPoints(email.orders))}
            </Typography>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </DialogPaper>
);

export default Totals;
