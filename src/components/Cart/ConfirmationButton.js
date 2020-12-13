import React from "react";
import { Button, Typography } from "@material-ui/core";
import { CartButtonBox } from "./components";

export const requiredFields = ["directions", "recipient", "locality"];

const recipientInfoComplete = ({ address }) => {
  if (!address) {
    return false;
  }

  const emptyPropertyKeys = requiredFields.filter(
    key => !address[key] || address[key] === ""
  );

  return emptyPropertyKeys.length <= 0;
};

const ConfirmationButton = ({ storeAndActions, handleConfirmCart }) => (
  <CartButtonBox>
    <Button
      color="secondary"
      variant="contained"
      onClick={handleConfirmCart}
      disabled={!recipientInfoComplete(storeAndActions.store.order.destination)}
    >
      {recipientInfoComplete(storeAndActions.store.order.destination) ? (
        "Listo: hacer pedido"
      ) : (
        <Typography variant="caption">
          ¡Por favor llena tus datos primero!
        </Typography>
      )}
    </Button>
  </CartButtonBox>
);

export default ConfirmationButton;
