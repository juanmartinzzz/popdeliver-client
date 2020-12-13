import React from "react";
import PaperTable from "../UI/PaperTable";
import { TableRow, TableCell, Typography, IconButton } from "@material-ui/core";
import { getDateFromTimestamp } from "../../services/datetime/date";
import { currency, getHumanDate } from "../../services/formatter/formatter";
import Info from "@material-ui/icons/Info";
import { getListFromObject } from "../../services/transformer/transformer";
import { getTotalCost } from "../../services/calculations/cart";

const OrderHistory = ({ storeAndActions }) => (
  <PaperTable
    title="Historial de pedidos"
    headers={["Fecha", "Total--"]}
    // headers={["Fecha", "Total--", "Detalles--"]}
  >
    {getListFromObject(storeAndActions.store.user.orders).map(
      (historyOrder, index) => (
        <TableRow key={index}>
          <TableCell>
            {/* {getHumanDate(getDateFromTimestamp(historyOrder.created))} */}
          </TableCell>
          <TableCell align="right">
            <Typography color="secondary">
              {currency(getTotalCost(historyOrder.items))}
            </Typography>
          </TableCell>
          {/* <TableCell align="right">
          <IconButton>
            <Info />
          </IconButton>
        </TableCell> */}
        </TableRow>
      )
    )}
  </PaperTable>
);

export default OrderHistory;
