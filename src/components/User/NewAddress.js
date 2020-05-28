import React, { Fragment } from "react";
import { Grid, Button } from "@material-ui/core";
import { TextFieldFullWidth } from "./components";

const isAddressComplete = address =>
  address &&
  address.nickname &&
  address.recipient &&
  address.neighborhood &&
  address.address;

const NewAddress = ({ storeAndActions }) => (
  <Fragment>
    <Grid item xs={4}>
      <TextFieldFullWidth
        label="Lugar"
        onChange={storeAndActions.userSetAddressProperty("nickname")}
      />
    </Grid>
    <Grid item xs={4}>
      <TextFieldFullWidth
        label="Receptor"
        onChange={storeAndActions.userSetAddressProperty("recipient")}
      />
    </Grid>
    <Grid item xs={4}>
      <TextFieldFullWidth
        label="Barrio"
        onChange={storeAndActions.userSetAddressProperty("neighborhood")}
      />
    </Grid>
    <Grid item xs={12}>
      <TextFieldFullWidth
        label="Dirección"
        onChange={storeAndActions.userSetAddressProperty("address")}
      />
    </Grid>

    <Grid item xs={12}>
      {isAddressComplete(storeAndActions.store.user.address) ? (
        <Button
          color="secondary"
          variant="outlined"
          onClick={storeAndActions.userAddAddress}
        >
          Agregar dirección
        </Button>
      ) : (
        <Button disabled color="secondary" variant="outlined">
          Completa los campos de la nueva dirección
        </Button>
      )}
    </Grid>
  </Fragment>
);

export default NewAddress;
