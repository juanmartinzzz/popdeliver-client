import React from "react";
import { Paper, TableRow, TableCell, IconButton } from "@material-ui/core";
import Delete from "@material-ui/icons/Delete";
import PaperTable from "../UI/PaperTable";

const AddressesTable = ({ storeAndActions }) => {
  const { user } = storeAndActions.store;

  return (
    <Paper>
      <PaperTable
        title="Direcciones"
        headers={["Lugar", "Receptor", "Direccion", "Eliminar--"]}
      >
        {user.addresses.map((address, index) => (
          <TableRow key={index}>
            <TableCell>{address.nickname}</TableCell>
            <TableCell>{address.recipient}</TableCell>
            <TableCell>
              {address.directions}, {address.locality}
            </TableCell>
            <TableCell align="right">
              <IconButton
                disabled={user.addresses.length <= 1}
                onClick={storeAndActions.userRemoveAddress(index)}
              >
                <Delete />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </PaperTable>
    </Paper>
  );
};

export default AddressesTable;
