import React, { Fragment } from "react";
import { Grid, Button } from "@material-ui/core";
import { TextFieldFullWidth } from "./components";

const isAddressComplete = address =>
  address &&
  address.nickname &&
  address.recipient &&
  address.locality &&
  address.directions;

const NewAddress = ({ storeAndActions }) => (
  <Fragment>
    <Grid item xs={4}>
      <TextFieldFullWidth
        name="nickname"
        label="Lugar"
        onChange={storeAndActions.userSetAddressProperty}
      />
    </Grid>
    <Grid item xs={4}>
      <TextFieldFullWidth
        name="recipient"
        label="Receptor"
        onChange={storeAndActions.userSetAddressProperty}
      />
    </Grid>
    <Grid item xs={4}>
      <TextFieldFullWidth
        name="locality"
        label="Barrio"
        onChange={storeAndActions.userSetAddressProperty}
      />
    </Grid>
    <Grid item xs={12}>
      <TextFieldFullWidth
        name="directions"
        label="Dirección (con casa o apartamento)"
        onChange={storeAndActions.userSetAddressProperty}
      />
    </Grid>

    <Grid item xs={12}>
      {isAddressComplete(storeAndActions.store.user.newAddress) ? (
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
