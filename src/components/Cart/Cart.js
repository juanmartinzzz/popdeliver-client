import React from "react";
import { Dialog } from "@material-ui/core";
import Items from "./Items/Items";
import Header from "../UI/FullscreenDialog/Header";
import Content from "../UI/FullscreenDialog/Content";
import ConfirmationButton from "./ConfirmationButton";
import { DialogTransition } from "../components";
import { DialogPaper } from "../UI/FullscreenDialog/components";
import DeliveryNotice from "./DeliveryNotices/DeliveryNotice";
import UserAndAddress from "./UserAndAddress";
import Totals from "./Items/Totals";
import Destination from "./Destination";

const Cart = ({ handleConfirmCart, storeAndActions }) => (
  <Dialog open fullScreen TransitionComponent={DialogTransition}>
    <Header
      title="Carrito"
      onCloseButtonClick={storeAndActions.layoutSetCartClose}
    />

    <Content>
      <Items storeAndActions={storeAndActions} />

      <Totals storeAndActions={storeAndActions} />

      <UserAndAddress storeAndActions={storeAndActions} />

      <br />
      <br />

      <Destination storeAndActions={storeAndActions} />

      <DialogPaper>
        <DeliveryNotice />
      </DialogPaper>

      <ConfirmationButton
        storeAndActions={storeAndActions}
        handleConfirmCart={handleConfirmCart}
      />
    </Content>
  </Dialog>
);

export default Cart;
