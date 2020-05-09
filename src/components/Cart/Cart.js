import React, { Fragment } from "react";
import { Dialog } from "@material-ui/core";
import Items from "./Items/Items";
import Feedback from "./Feedback/Feedback";
import Header from "../UI/FullscreenDialog/Header";
import Content from "../UI/FullscreenDialog/Content";
import ConfirmationButton from "./ConfirmationButton";
import PlaceNewOrderButton from "./PlaceNewOrderButton";
import { DialogTransition } from "../components";
import { DialogPaper } from "../UI/FullscreenDialog/components";
import DeliveryNotice from "./DeliveryNotices/DeliveryNotice";
import Recipient from "./Recipient";

const Cart = ({ handleConfirmCart, storeAndActions }) => (
  <Dialog open fullScreen TransitionComponent={DialogTransition}>
    <Header
      title="Carrito"
      onCloseButtonClick={storeAndActions.cartSetClose}
      hideCloseButton={storeAndActions.store.order.status}
    />

    <Content>
      <Items storeAndActions={storeAndActions} />

      <Recipient storeAndActions={storeAndActions} />

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
