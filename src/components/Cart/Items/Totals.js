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
import { getTotalCost } from "../../../services/calculations/cart";

const Totals = ({ storeAndActions }) => (
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
      </TableBody>
    </Table>
  </DialogPaper>
);

export default Totals;
