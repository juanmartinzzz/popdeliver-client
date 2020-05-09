import React from "react";
import { Button, Typography } from "@material-ui/core";
import { CartButtonBox } from "./components";
import { requiredRecipientFields } from "../../utils/order";

const ConfirmationButton = ({ storeAndActions, handleConfirmCart }) => {
  const { order } = storeAndActions.store;

  const recipientInfoComplete = () => {
    const emptyPropertyKeys = Object.keys(order.recipient).filter(
      key => requiredRecipientFields.includes(key) && !order.recipient[key]
    );

    return emptyPropertyKeys.length <= 0;
  };

  return (
    <CartButtonBox>
      <Button
        color="secondary"
        variant="contained"
        onClick={handleConfirmCart}
        disabled={!recipientInfoComplete()}
      >
        {recipientInfoComplete() ? (
          "Listo: hacer pedido"
        ) : (
          <Typography variant="caption">
            ¡Por favor llena tus datos primero!
          </Typography>
        )}
      </Button>
    </CartButtonBox>
  );
};

export default ConfirmationButton;
