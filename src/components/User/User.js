import React from "react";
import { Dialog, Button, Grid } from "@material-ui/core";
import { DialogTransition } from "../components";
import Header from "../UI/FullscreenDialog/Header";
import Content from "../UI/FullscreenDialog/Content";
import AddressesTable from "./AddressesTable";
import OrderHistory from "./OrderHistory";
import NewAddress from "./NewAddress";
import { TextFieldFullWidth } from "./components";

const User = ({ storeAndActions }) => (
  <Dialog open fullScreen TransitionComponent={DialogTransition}>
    <Header
      title="Usuario"
      onCloseButtonClick={storeAndActions.layoutSetUserClose}
    />
    <Content>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <TextFieldFullWidth
            label="Email"
            value={storeAndActions.store.user.email}
            onChange={storeAndActions.userSetProperty("email")}
          />
        </Grid>

        <Grid item xs={6}>
          <TextFieldFullWidth
            label="Teléfono"
            value={storeAndActions.store.user.phone}
            onChange={storeAndActions.userSetProperty("phone")}
          />
        </Grid>

        <Grid item xs={12}>
          <Button
            color="secondary"
            variant="contained"
            onClick={storeAndActions.something}
          >
            Cambiar Usuario
          </Button>
        </Grid>

        <Grid item xs={12}>
          <AddressesTable storeAndActions={storeAndActions} />
        </Grid>

        <NewAddress storeAndActions={storeAndActions} />

        <Grid item xs={12}>
          <OrderHistory storeAndActions={storeAndActions} />
        </Grid>
      </Grid>
    </Content>
  </Dialog>
);

export default User;
